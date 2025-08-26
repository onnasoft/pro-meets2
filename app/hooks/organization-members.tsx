import { useQuery } from "@tanstack/react-query";
import { getOrganizationMembers, getOrganizationsMembers } from "pro-meets-core";

export function useOrganizationsMembers(
  params: Parameters<typeof getOrganizationsMembers>[0]
) {
  return useQuery({
    queryKey: ["organizationsMembers", params],
    queryFn: () => getOrganizationsMembers(params),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

export function useOrganizationMembers(
  id: string,
  params: Parameters<typeof getOrganizationMembers>[1]
) {
  return useQuery({
    queryKey: ["organizationMembers", id, params],
    queryFn: () => getOrganizationMembers(id, params),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
