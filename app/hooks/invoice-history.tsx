import { useQuery } from "@tanstack/react-query";
import { getInvoiceHistory } from "~/services/stripe";

export function useInvoiceHistory() {
  return useQuery({
    queryKey: ["invoiceHistory"],
    queryFn: getInvoiceHistory,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
