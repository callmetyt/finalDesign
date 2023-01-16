import net from ".";
import { VaildChainResponse } from "../types";
import { handleResponse } from "./utils";

export async function vaildChain() {
  const res = await net.post<VaildChainResponse>("/vaildChain");
  const data = handleResponse(res);
  return data;
}
