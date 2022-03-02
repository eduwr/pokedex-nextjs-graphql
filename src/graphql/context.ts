import { AxiosInstance } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { pokeApi } from "services/pokeApi";

export type Context = {
  pokeApi: AxiosInstance;
};

export async function createContext(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Context> {
  return {
    pokeApi,
  };
}
