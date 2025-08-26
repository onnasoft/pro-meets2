import { useQuery } from "@tanstack/react-query";
import { getInvoiceHistory } from "pro-meets-core";

export function useInvoiceHistory() {
  return useQuery({
    queryKey: ["invoiceHistory"],
    queryFn: getInvoiceHistory,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
