import type { ReactNode } from "react";

interface MenuItemProps {
  readonly icon: ReactNode;
  readonly children: ReactNode;
  readonly onClick: () => void;
  readonly isDanger?: boolean;
  readonly badge?: number;
}

export function MenuItem({
  icon,
  children,
  onClick,
  isDanger = false,
  badge
}: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-4 py-2 text-sm ${
        isDanger
          ? "text-error-600 hover:bg-error-50"
          : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      {icon}
      <span className={isDanger ? "text-error-600" : "text-gray-700"}>
        {children}
      </span>
      {badge && (
        <span className="ml-auto bg-gray-200 text-gray-700 text-xs font-medium py-1 px-2 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}