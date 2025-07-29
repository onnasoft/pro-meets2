import { OrganizationPlan } from "~/types/models";
import { BadgeCheck, CreditCard, Building2 } from "lucide-react";

interface PlanSelectorProps {
  readonly selectedPlan: OrganizationPlan;
  readonly onSelectPlan: (plan: OrganizationPlan) => void;
  readonly translations: {
    plans: Record<OrganizationPlan, string>;
    planDescriptions: Record<OrganizationPlan, string>;
    fields: {
      plan: string;
    };
  };
  readonly error?: string;
}

export function PlanSelector({
  selectedPlan,
  onSelectPlan,
  translations,
  error,
}: PlanSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {translations.fields.plan}
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Free Plan */}
        <button
          type="button"
          className={`flex flex-col items-start justify-start text-left border rounded-lg p-4 cursor-pointer transition-all ${
            selectedPlan === OrganizationPlan.FREE
              ? "border-primary-500 bg-primary-50 shadow-md"
              : "border-gray-200 hover:border-primary-300"
          }`}
          onClick={() => onSelectPlan(OrganizationPlan.FREE)}
        >
          <div className="flex items-center mb-2">
            <BadgeCheck className="h-5 w-5 mr-2 text-gray-600" />
            <h3 className="font-medium">{translations.plans.free}</h3>
          </div>
          <p className="text-sm text-gray-600">
            {translations.planDescriptions.free}
          </p>
          <div className="mt-3 text-primary-600 font-medium">
            {selectedPlan === OrganizationPlan.FREE && <span>Selected</span>}
          </div>
        </button>

        {/* Pro Plan */}
        <button
          type="button"
          className={`flex flex-col items-start justify-start text-left border rounded-lg p-4 cursor-pointer transition-all ${
            selectedPlan === OrganizationPlan.PRO
              ? "border-primary-500 bg-primary-50 shadow-md"
              : "border-gray-200 hover:border-primary-300"
          }`}
          onClick={() => onSelectPlan(OrganizationPlan.PRO)}
        >
          <div className="flex items-center mb-2">
            <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
            <h3 className="font-medium">{translations.plans.pro}</h3>
          </div>
          <p className="text-sm text-gray-600">
            {translations.planDescriptions.pro}
          </p>
          <div className="mt-3 text-primary-600 font-medium">
            {selectedPlan === OrganizationPlan.PRO && <span>Selected</span>}
          </div>
        </button>

        {/* Enterprise Plan */}
        <button
          type="button"
          className={`flex flex-col items-start justify-start text-left border rounded-lg p-4 cursor-pointer transition-all ${
            selectedPlan === OrganizationPlan.ENTERPRISE
              ? "border-primary-500 bg-primary-50 shadow-md"
              : "border-gray-200 hover:border-primary-300"
          }`}
          onClick={() => onSelectPlan(OrganizationPlan.ENTERPRISE)}
        >
          <div className="flex items-center mb-2">
            <Building2 className="h-5 w-5 mr-2 text-purple-600" />
            <h3 className="font-medium">{translations.plans.enterprise}</h3>
          </div>
          <p className="text-sm text-gray-600">
            {translations.planDescriptions.enterprise}
          </p>
          <div className="mt-3 text-primary-600 font-medium">
            {selectedPlan === OrganizationPlan.ENTERPRISE && (
              <span>Selected</span>
            )}
          </div>
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      <input type="hidden" name="plan" value={selectedPlan} />
    </div>
  );
}
