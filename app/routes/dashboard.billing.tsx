import { useLoaderData } from "@remix-run/react";
import { languageLoader } from "~/loaders/language";
import translations from "~/components/billing/translations";
import { InvoiceHistory } from "~/components/billing/InvoiceHistory";
import { CurrentPlan } from "~/components/billing/CurrentPlan";
import { UpcomingPayments } from "~/components/billing/UpcomingPayments";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { usePaymentMethods } from "~/hooks/payment-methods";
import { PaymentMethods } from "~/components/billing/PaymentMethods";
import { useInvoiceHistory } from "~/hooks/invoice-history";
import config from "~/config";

export { languageLoader as loader } from "~/loaders/language";

export default function BillingPage() {
  const { language } = useLoaderData<typeof languageLoader>();
  const t = translations[language] || translations.en;

  const { data: paymentMethods = [] } = usePaymentMethods();
  const { data: invoices = [] } = useInvoiceHistory();

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
      <div className="max-w-6xl mx-auto">
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
