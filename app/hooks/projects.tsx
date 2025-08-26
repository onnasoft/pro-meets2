import { useQuery } from "@tanstack/react-query";
import { getProject, getProjects } from "pro-meets-core";

export function useProjects(params?: Parameters<typeof getProjects>[0]) {
  return useQuery({
    queryKey: ["projects", params],
    queryFn: () => getProjects(params),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

export function useProject(
  id: string,
  params?: Parameters<typeof getProject>[1]
) {
  return useQuery({
    queryKey: ["projects", id, params],
    queryFn: () => getProject(id, params),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
