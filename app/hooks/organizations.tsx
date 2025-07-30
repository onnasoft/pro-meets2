import { useQuery } from "@tanstack/react-query";
import { getOrganizations } from "~/services/organizations";

type Params = Parameters<typeof getOrganizations>[0];

export function useOrganizations(params?: Params) {
  return useQuery({
    queryKey: ["organizations", params],
    queryFn: () => getOrganizations(params),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
