import { request } from "graphql-request";

let customFetcher;

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  customFetcher = (query: string, variables: any) =>
    request("http://localhost:3000/api/graphql", query, variables);
} else {
  customFetcher = (query: string, variables: any) =>
    request("/api/graphql", query, variables);
}

export const fetcher = customFetcher;
