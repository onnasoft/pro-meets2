import { DollarSign, CheckCircle } from "lucide-react";
import translations  from "./translations";

interface PlanFeature {
  name: string;
  price: string;
  features: string[];
  nextBillingDate: string;
}

interface CurrentPlanProps {
  translations: typeof translations.en.currentPlan;
  currentPlan: PlanFeature;
}

export function CurrentPlan({ translations, currentPlan }: CurrentPlanProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold flex items-center mb-4">
        <DollarSign className="h-5 w-5 mr-2 text-purple-600" />
        {translations.title}
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">{currentPlan.name}</h3>
          <span className="text-lg font-bold">{currentPlan.price}</span>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-medium text-gray-500 mb-2">
            {translations.featuresTitle}
          </h4>
          <ul className="space-y-2">
            {currentPlan.features.map((feature) => (
              <li key={feature} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-sm">
            <span className="text-gray-500">{translations.nextBilling}</span>{" "}
            <span className="font-medium">
              {currentPlan.nextBillingDate}
            </span>
          </p>
        </div>
        <div className="pt-4">
          <button className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            {translations.changePlan}
          </button>
        </div>
      </div>
    </div>
  );
}