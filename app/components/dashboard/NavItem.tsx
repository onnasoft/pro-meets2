import { NavLink } from "@remix-run/react";
import type { ReactNode } from "react";

interface NavItemProps {
  readonly to: string;
  readonly children: ReactNode;
  readonly activeClassName?: string;
}

export function NavItem({ to, children, activeClassName = "" }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-3 py-2 text-sm font-medium rounded-md ${
          isActive
            ? activeClassName
            : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
        }`
      }
      end
    >
      {children}
    </NavLink>
  );
}