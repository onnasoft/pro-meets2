import type { ReactNode } from "react";

interface MenuItemProps {
  readonly icon: ReactNode;
  readonly children: ReactNode;
  readonly onClick: () => void;
  readonly isDanger?: boolean;
  readonly badge?: number;
  readonly isHighlighted?: boolean;
  readonly className?: string;
}

export function MenuItem({
  icon,
  children,
  onClick,
  isDanger = false,
  badge,
  isHighlighted = false,
  className = ""
}: MenuItemProps) {
  // Establecemos los colores basados en el estado del ítem
  const getTextColor = () => {
    if (isDanger) return "text-error-600";
    if (isHighlighted) return "text-primary-600";
    return "text-gray-700";
  };

  const getBgHoverColor = () => {
    if (isDanger) return "hover:bg-error-50";
    if (isHighlighted) return "hover:bg-primary-50";
    return "hover:bg-gray-50";
  };

  const getBadgeColor = () => {
    if (isHighlighted) return "bg-primary-100 text-primary-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-4 py-2.5 text-sm transition-colors duration-150 ${getTextColor()} ${getBgHoverColor()} ${className}`}
      role="menuitem"
    >
      {/* Icono con color dinámico */}
      <span className={`mr-3 ${getTextColor()}`}>
        {icon}
      </span>

      {/* Texto del ítem */}
      <span className="flex-1 text-left">
        {children}
      </span>

      {/* Badge (si existe) */}
      {badge !== undefined && (
        <span className={`ml-2 text-xs font-medium py-0.5 px-2 rounded-full ${getBadgeColor()}`}>
          {badge}
        </span>
      )}
    </button>
  );
}