import { History } from "lucide-react";
import translations from "./translations";

interface UpcomingPaymentsProps {
  readonly translations: typeof translations.en.upcomingPayments;
  readonly nextPaymentAmount?: string;
  readonly estimatedPaymentDate?: string;
}

export function UpcomingPayments({
  translations,
  nextPaymentAmount = "$9.99",
  estimatedPaymentDate = "15 Feb 2023",
}: UpcomingPaymentsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold flex items-center mb-4">
        <History className="h-5 w-5 mr-2 text-orange-600" />
        {translations.title}
      </h2>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">
            {translations.nextPaymentAmount}
          </p>
          <p className="text-lg font-bold">{nextPaymentAmount}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">{translations.estimatedDate}</p>
          <p className="text-lg font-medium">{estimatedPaymentDate}</p>
        </div>
        <div className="pt-2">
          <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700">
            {translations.payNow}
          </button>
        </div>
      </div>
    </div>
  );
}
