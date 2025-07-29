import { useLoaderData } from "@remix-run/react";
import { languageLoader } from "~/loaders/language";
import translations from "~/components/billing/translations";
import { PaymentMethods } from "~/components/billing/PaymentMethods";
import { InvoiceHistory } from "~/components/billing/InvoiceHistory";
import { CurrentPlan } from "~/components/billing/CurrentPlan";
import { UpcomingPayments } from "~/components/billing/UpcomingPayments";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import config from "~/config";

export { languageLoader as loader } from "~/loaders/language";

export default function BillingPage() {
  const { language } = useLoaderData<typeof languageLoader>();
  const t = translations[language] || translations.en;

  const paymentMethods = [
    {
      id: "1",
      type: "VISA",
      last4: "4242",
      exp: "12/25",
      isDefault: true,
    },
    {
      id: "2",
      type: "MASTERCARD",
      last4: "5555",
      exp: "06/24",
      isDefault: false,
    },
  ];

  const invoices = [
    {
      id: "INV-2023-001",
      date: "15 Ene 2023",
      amount: "$9.99",
      status: "Paid",
      downloadUrl: "#",
    },
    {
      id: "INV-2022-012",
      date: "15 Dic 2022",
      amount: "$9.99",
      status: "Paid",
      downloadUrl: "#",
    },
    {
      id: "INV-2022-011",
      date: "15 Nov 2022",
      amount: "$9.99",
      status: "Paid",
      downloadUrl: "#",
    },
  ];

  const currentPlan = {
    name: "Plan Pro",
    price: "$9.99/mes",
    features: [
      "Hasta 10 miembros",
      "5GB de almacenamiento",
      "Soporte prioritario",
    ],
    nextBillingDate: "15 Feb 2023",
  };

  const stripePromise = loadStripe(config.stripePublishableKey);

  return (
    <Elements stripe={stripePromise}>
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
          <p className="text-gray-600 mt-2">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sección de métodos de pago e historial */}
          <div className="lg:col-span-2 space-y-6">
            <PaymentMethods
              translations={t.paymentMethods}
              paymentMethods={paymentMethods}
            />
            <InvoiceHistory
              translations={t.invoiceHistory}
              invoices={invoices}
            />
          </div>

          {/* Sidebar con plan actual y próximos pagos */}
          <div className="space-y-6">
            <CurrentPlan
              translations={t.currentPlan}
              currentPlan={currentPlan}
            />
            <UpcomingPayments translations={t.upcomingPayments} />
          </div>
        </div>
      </div>
    </Elements>
  );
}
