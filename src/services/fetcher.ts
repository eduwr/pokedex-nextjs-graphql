import { request } from "graphql-request";

export const fetcher = (query: string, variables: any) =>
  request("/api/graphql", query, variables);
