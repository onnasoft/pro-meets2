import { useQuery } from "@tanstack/react-query";
import { getJob, getJobs } from "pro-meets-core";

type Params = Parameters<typeof getJobs>[0];

export function useJobs(params?: Params) {
  return useQuery({
    queryKey: ["jobs", params],
    queryFn: () => getJobs(params),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

export function useJob(id: string) {
  return useQuery({
    queryKey: ["jobs", id],
    queryFn: () => getJob(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
