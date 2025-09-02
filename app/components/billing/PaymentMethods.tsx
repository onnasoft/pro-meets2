import { CreditCard, Loader2, CheckCircle, XCircle } from "lucide-react";
import translations from "./translations";
import { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQueryClient } from "@tanstack/react-query";
import { attachPaymentMethod, createSetupIntent, detachPaymentMethod, PaymentMethod, setDefaultPaymentMethod } from "@onnasoft/pro-meets-core";

interface PaymentMethodsProps {
  readonly translations: typeof translations.en.paymentMethods;
  readonly paymentMethods: PaymentMethod[];
}

export function PaymentMethods({
  translations,
  paymentMethods,
}: PaymentMethodsProps) {
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [cardholderName, setCardholderName] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const stripe = useStripe();
  const elements = useElements();

  const client = useQueryClient();

  const resetAlerts = () => {
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetAlerts();

    if (!stripe || !elements) {
      setError(translations.errors.stripeNotLoaded);
      return;
    }

    try {
      setIsSubmitting(true);

      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        setError(translations.errors.cardElementNotFound);
        return;
      }

      if (!cardholderName.trim()) {
        setError(translations.errors.cardholderNameRequired);
        return;
      }

      const result = await stripe.confirmCardSetup(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: cardholderName,
          },
        },
      });

      if (result.error) {
        setError(
          result.error.message || translations.errors.paymentProcessingFailed
        );
        return;
      }

      const paymentMethodId =
        typeof result.setupIntent.payment_method === "string"
          ? result.setupIntent.payment_method
          : result.setupIntent.payment_method?.id;

      if (!paymentMethodId) {
        setError(translations.errors.paymentMethodIdMissing);
        return;
      }

      await attachPaymentMethod(paymentMethodId);
      setSuccess(translations.success.cardAdded);
      setIsAddingCard(false);
      setCardholderName("");

      await client.invalidateQueries({ queryKey: ["paymentMethods"] });

      const response = await createSetupIntent();
      setClientSecret(response.clientSecret);
    } catch (error) {
      console.error(error);
      setError(translations.errors.unexpectedError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (paymentMethodId: string) => {
    if (!stripe) {
      setError(translations.errors.stripeNotLoaded);
      return;
    }

    setIsSubmitting(true);
    await detachPaymentMethod(paymentMethodId);
    client.invalidateQueries({ queryKey: ["paymentMethods"] });
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitting(false);
  };

  const handleMakeDefault = async (paymentMethodId: string) => {
    if (!stripe) {
      setError(translations.errors.stripeNotLoaded);
      return;
    }
    setIsSubmitting(true);
    await setDefaultPaymentMethod(paymentMethodId);
    client.invalidateQueries({ queryKey: ["paymentMethods"] });
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitting(false);
  };

  useEffect(() => {
    const setupIntent = async () => {
      try {
        const { clientSecret } = await createSetupIntent();
        setClientSecret(clientSecret);
      } catch (error) {
        console.error(error);
        setError(translations.errors.setupIntentFailed);
      }
    };

    setupIntent();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-xs border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center">
          <CreditCard className="h-5 w-5 mr-2 text-primary-600" />
          {translations.title}
        </h2>
        <button
          disabled={!stripe || isSubmitting}
          onClick={() => {
            setIsAddingCard(!isAddingCard);
            resetAlerts();
          }}
          className="px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {translations.addButton}
        </button>
      </div>

      {/* Mensajes de error/éxito */}
      {(error || success) && (
        <div className="mb-4">
          {error && (
            <div className="flex items-start p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
              <XCircle className="shrink-0 w-5 h-5 mr-2 mt-0.5" />
              <div>
                <span className="font-medium">{error}</span>
              </div>
            </div>
          )}
          {success && (
            <div className="flex items-start p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
              <CheckCircle className="shrink-0 w-5 h-5 mr-2 mt-0.5" />
              <div>
                <span className="font-medium">{success}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {isAddingCard && (
        <form
          onSubmit={handleSubmit}
          className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50"
        >
          <h3 className="font-medium mb-3">
            {translations.cardholderNameLabel}
          </h3>
          <div className="mb-4">
            <input
              type="text"
              placeholder={translations.cardholderNamePlaceholder}
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-xs focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              disabled={isSubmitting}
            />
          </div>

          <h3 className="font-medium mb-3">{translations.registerTitle}</h3>
          <div className="mb-4">
            <div className="border border-gray-300 p-3 rounded-md bg-white focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-primary-500">
              <CardElement
                options={{
                  hidePostalCode: true,
                  disabled: isSubmitting,
                }}
              />
            </div>
          </div>
          <div className="pt-2">
            <button
              disabled={!stripe || isSubmitting}
              type="submit"
              className="w-full flex justify-center items-center px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {translations.processing}
                </>
              ) : (
                translations.saveButton
              )}
            </button>
          </div>
        </form>
      )}

      {/* Lista de tarjetas registradas */}
      <div className="space-y-3">
        {paymentMethods.length === 0 ? (
          <div className="text-center py-4 text-gray-500">
            {translations.noPaymentMethods}
          </div>
        ) : (
          paymentMethods.map((paymentMethod) => {
            const isDefault = paymentMethod.isDefault;

            return (
              <div
                key={paymentMethod.id}
                className={`flex items-center justify-between p-4 border rounded-lg ${
                  isDefault
                    ? "border-primary-500 bg-primary-50"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-md shadow-2xs mr-3">
                    {paymentMethod.type === "VISA" ? (
                      <span className="text-primary-600 font-bold">VISA</span>
                    ) : (
                      <span className="text-red-600 font-bold">MC</span>
                    )}
                  </div>
                  <div>
                    <p className="font-medium">
                      {paymentMethod.type} •••• {paymentMethod.card?.last4}
                    </p>
                    <p className="text-sm text-gray-500">
                      Expira {paymentMethod.card?.exp_year}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {isDefault && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {translations.defaultBadge}
                    </span>
                  )}
                  {!isDefault && (
                    <>
                      <button
                        onClick={() => handleMakeDefault(paymentMethod.id)}
                        className="text-primary-600 hover:text-primary-800 text-sm font-medium disabled:opacity-50"
                        disabled={isSubmitting}
                      >
                        {translations.makeDefault}
                      </button>
                      <button
                        onClick={() => handleDelete(paymentMethod.id)}
                        className="text-red-600 hover:text-red-800 text-sm font-medium disabled:opacity-50"
                        disabled={isSubmitting}
                      >
                        {translations.delete}
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
