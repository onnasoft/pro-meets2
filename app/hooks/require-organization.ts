import { useNavigate, useOutletContext } from "@remix-run/react";
import { useEffect } from "react";
import { DashboardOutletContext } from "~/types/dashboard";

export function useRequireOrganization() {
  const { organizations } = useOutletContext<DashboardOutletContext>();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/dashboard/billing") return;
    if (organizations.length > 0) return;
    if (location.pathname === "/dashboard/organizations/new") return;

    navigate("/dashboard/organizations/new");
  }, [organizations]);
}
