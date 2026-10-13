import { queryOptions } from "@tanstack/react-query";
import { getCommandOverview, getFinanceOverview, getInfrastructureOverview } from "./admin-control.functions";

export const commandQuery = queryOptions({ queryKey: ["admin-command"], queryFn: () => getCommandOverview(), staleTime: 30_000, retry: false });
export const financeQuery = (search = "", cursor: string | null = null) => queryOptions({ queryKey: ["admin-finance", search, cursor],
  queryFn: () => getFinanceOverview({ data: { search, cursor } }), staleTime: 30_000, retry: false });
export const infraQuery = (kind: "webhooks" | "subdomains" | "aliases" = "webhooks", search = "", status = "all", cursor: string | null = null) => queryOptions({
  queryKey: ["admin-infra", kind, search, status, cursor], queryFn: () => getInfrastructureOverview({ data: { kind, search, status: status as "all", cursor } }), staleTime: 30_000, retry: false });