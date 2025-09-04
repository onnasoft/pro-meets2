import { getPost, getPosts } from "@onnasoft/pro-meets-core";
import { useQuery } from "@tanstack/react-query";

type Params = Parameters<typeof getPosts>[0];

export function usePosts(params?: Params) {
  return useQuery({
    queryKey: ["posts", params],
    queryFn: () => getPosts(params),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

export function usePost(id: string) {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
