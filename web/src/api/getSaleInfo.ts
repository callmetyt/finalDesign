import net from ".";
import { TeaInfoResponse } from "../types";
import { handleResponse } from "./utils";

export async function getSaleInfo(key: string) {
  const res = await net.post<TeaInfoResponse>("/getSaleInfo", { key });
  const data = handleResponse(res);
  return data;
}
