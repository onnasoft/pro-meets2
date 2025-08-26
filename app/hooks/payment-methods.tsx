import { useQuery } from "@tanstack/react-query";
import { getPaymentMethods } from "pro-meets-core";

export function usePaymentMethods() {
  return useQuery({
    queryKey: ["paymentMethods"],
    queryFn: getPaymentMethods,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
