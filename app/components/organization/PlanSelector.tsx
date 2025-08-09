import { OrganizationPlan } from "~/models/Organization";
import { BadgeCheck, CreditCard, Building2 } from "lucide-react";
import translations from "./translations";
import { useOutletContext, useNavigate } from "react-router";
import { DashboardOutletContext } from "~/types/dashboard";
import { useState } from "react";
import { Description, Dialog, DialogTitle } from "@headlessui/react";

interface PlanSelectorProps {
  readonly selectedPlan: OrganizationPlan;
  readonly onSelectPlan: (plan: OrganizationPlan) => void;
  readonly translations: typeof translations.en;
  readonly error?: string;
}

const requirePaymentMethods = [
  OrganizationPlan.PRO,
  OrganizationPlan.ENTERPRISE,
];

export function PlanSelector({
  selectedPlan,
  onSelectPlan,
  translations,
  error,
}: PlanSelectorProps) {
  const { user } = useOutletContext<DashboardOutletContext>();
  const { defaultPaymentMethodId } = user;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handlePlanSelection = (plan: OrganizationPlan) => {
    if (requirePaymentMethods.includes(plan)) {
      if (!defaultPaymentMethodId) {
        setIsOpen(true);
        return;
      }
    }
    onSelectPlan(plan);
  };

  const handleConfirm = () => {
    setIsOpen(false);
    navigate("/dashboard/billing");
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Diálogo de confirmación */}
      <Dialog
        open={isOpen}
        onClose={handleCancel}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-black opacity-30" />

          <div className="relative bg-white rounded-lg max-w-md mx-auto p-6">
            <DialogTitle className="text-lg font-medium text-gray-900">
              {translations.paymentRequired.title}
            </DialogTitle>
            <Description className="mt-2 text-sm text-gray-500">
              {translations.paymentRequired.description}
            </Description>

            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={handleCancel}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {translations.paymentRequired.cancel}
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700"
              >
                {translations.paymentRequired.confirm}
              </button>
            </div>
          </div>
        </div>
      </Dialog>

      {/* Selector de planes */}
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
          onClick={() => handlePlanSelection(OrganizationPlan.FREE)}
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
          onClick={() => handlePlanSelection(OrganizationPlan.PRO)}
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
          {!defaultPaymentMethodId && (
            <div className="mt-2 text-xs text-yellow-600">
              {translations.plans.paymentRequired}
            </div>
          )}
        </button>

        {/* Enterprise Plan */}
        <button
          type="button"
          className={`flex flex-col items-start justify-start text-left border rounded-lg p-4 cursor-pointer transition-all ${
            selectedPlan === OrganizationPlan.ENTERPRISE
              ? "border-primary-500 bg-primary-50 shadow-md"
              : "border-gray-200 hover:border-primary-300"
          }`}
          onClick={() => handlePlanSelection(OrganizationPlan.ENTERPRISE)}
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
          {!defaultPaymentMethodId && (
            <div className="mt-2 text-xs text-yellow-600">
              {translations.plans.paymentRequired}
            </div>
          )}
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      <input type="hidden" name="plan" value={selectedPlan} />
    </div>
  );
}
