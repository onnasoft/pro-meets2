import type { ReactNode } from "react";

interface MenuItemProps {
  readonly icon: ReactNode;
  readonly children: ReactNode;
  readonly onClick: () => void;
  readonly isDanger?: boolean;
}

export function MenuItem({
  icon,
  children,
  onClick,
  isDanger = false,
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
    </button>
  );
}