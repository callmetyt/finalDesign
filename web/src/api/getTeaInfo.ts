import net from ".";
import { TeaInfoResponse } from "../types";
import { handleResponse } from "./utils";

export async function getTeaInfo() {
  const res = await net.post<TeaInfoResponse>("/find");
  const data = handleResponse(res);
  return data;
}
