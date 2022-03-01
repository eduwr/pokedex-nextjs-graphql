export interface PokeApiListResponse<T> {
  results: T;
  count: number;
  next: string;
  previous: string;
}
