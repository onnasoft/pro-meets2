import { useQuery } from "@tanstack/react-query";
import { getOrganization, getOrganizations, statusOrganization } from "@onnasoft/pro-meets-core";

type Params = Parameters<typeof getOrganizations>[0];

export function useOrganizations(params?: Params) {
  return useQuery({
    queryKey: ["organizations", params],
    queryFn: () => getOrganizations(params),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

export function useOrganization(id: string) {
  return useQuery({
    queryKey: ["organizations", id],
    queryFn: () => getOrganization(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

export function useOrganizationStatus(id: string | null) {
  return useQuery({
    queryKey: ["statusOrganization", id],
    queryFn: () => {
      if (!id) return Promise.resolve(null);
      return statusOrganization(id);
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
