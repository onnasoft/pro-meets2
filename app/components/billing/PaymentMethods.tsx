import { CreditCard } from "lucide-react";
import translations from "./translations";
import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

interface PaymentMethod {
  id: string;
  type: string;
  last4: string;
  exp: string;
  isDefault: boolean;
}

interface PaymentMethodsProps {
  translations: typeof translations.en.paymentMethods;
  paymentMethods: PaymentMethod[];
}

export function PaymentMethods({
  translations,
  paymentMethods,
}: PaymentMethodsProps) {
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [cardholderName, setCardholderName] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center">
          <CreditCard className="h-5 w-5 mr-2 text-primary-600" />
          {translations.title}
        </h2>
        <button
          onClick={() => setIsAddingCard(!isAddingCard)}
          className="px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700"
        >
          {translations.addButton}
        </button>
      </div>

      {isAddingCard && (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (!stripe || !elements) return;

            const cardElement = elements.getElement(CardElement);
            const { error, paymentMethod } = await stripe.createPaymentMethod({
              type: "card",
              card: cardElement!,
            });

            if (error) {
              console.error(error.message);
            } else {
              console.log(paymentMethod.id);
              // aquí llamas a tu backend para guardar paymentMethod.id
            }
          }}
          className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50"
        >
          <h3 className="font-medium mb-3">Nombre de la tarjeta</h3>
          <div className="">
            <input
              type="text"
              placeholder={translations.cardholderName}
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  mb-3"
            />
          </div>

          <h3 className="font-medium mb-3">{translations.registerTitle}</h3>
          <div className="mb-4">
            <div className="border p-3 rounded-md bg-white">
              <CardElement options={{ hidePostalCode: true }} />
            </div>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700"
            >
              {translations.saveButton}
            </button>
          </div>
        </form>
      )}

      {/* Lista de tarjetas registradas */}
      <div className="space-y-3">
        {paymentMethods.map((card) => (
          <div
            key={card.id}
            className={`flex items-center justify-between p-4 border rounded-lg ${
              card.isDefault
                ? "border-primary-500 bg-primary-50"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-md shadow-xs mr-3">
                {card.type === "VISA" ? (
                  <span className="text-primary-600 font-bold">VISA</span>
                ) : (
                  <span className="text-red-600 font-bold">MC</span>
                )}
              </div>
              <div>
                <p className="font-medium">
                  {card.type} •••• {card.last4}
                </p>
                <p className="text-sm text-gray-500">Expira {card.exp}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {card.isDefault && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                  {translations.defaultBadge}
                </span>
              )}
              <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                {card.isDefault ? translations.edit : translations.makeDefault}
              </button>
              {!card.isDefault && (
                <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                  {translations.delete}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
