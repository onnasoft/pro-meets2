import { NavLink } from "react-router";
import type { MouseEventHandler, ReactNode } from "react";

interface NavItemProps {
  readonly to: string;
  readonly children: ReactNode;
  readonly activeClassName?: string;
  readonly exact?: boolean;
  readonly className?: string;
  readonly onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function NavItem({
  to,
  children,
  activeClassName = "bg-primary-100 text-primary-600",
  exact = false,
  className = "",
  onClick,
}: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-3 py-2 text-sm font-medium rounded-md transition-colors  ${
          isActive
            ? activeClassName
            : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
        } ${className}`
      }
      end={exact}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}
