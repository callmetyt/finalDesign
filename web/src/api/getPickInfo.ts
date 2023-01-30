import net from ".";
import { TeaInfoResponse } from "../types";
import { handleResponse } from "./utils";

export async function getPickInfo(key: string) {
  const res = await net.post<TeaInfoResponse>("/getPickInfo", { key });
  const data = handleResponse(res);
  return data;
}
