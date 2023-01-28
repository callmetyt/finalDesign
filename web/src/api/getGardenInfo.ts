import net from ".";
import { TeaInfoResponse } from "../types";
import { handleResponse } from "./utils";

export async function getGardenInfo(key: string) {
  const res = await net.post<TeaInfoResponse>("/getGardenInfo", { key });
  const data = handleResponse(res);
  return data;
}
