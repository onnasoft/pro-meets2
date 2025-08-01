import { NavLink } from "@remix-run/react";
import type { ReactNode } from "react";

interface NavItemProps {
  readonly to: string;
  readonly children: ReactNode;
  readonly activeClassName?: string;
  readonly exact?: boolean;
}

export function NavItem({
  to,
  children,
  activeClassName = "bg-primary-100 text-primary-600",
  exact = false,
}: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
          isActive
            ? activeClassName
            : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
        }`
      }
      end={exact}
    >
      {children}
    </NavLink>
  );
}
