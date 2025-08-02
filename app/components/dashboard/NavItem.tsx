import { NavLink } from "@remix-run/react";
import type { ReactNode } from "react";

interface NavItemProps {
  readonly to: string;
  readonly children: ReactNode;
  readonly activeClassName?: string;
  readonly exact?: boolean;
  readonly className?: string;
}

export function NavItem({
  to,
  children,
  activeClassName = "bg-primary-100 text-primary-600",
  exact = false,
  className = "",
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
    >
      {children}
    </NavLink>
  );
}
