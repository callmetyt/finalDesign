import net from ".";
import { TeaInfoResponse } from "../types";
import { handleResponse } from "./utils";

export async function getTeaInfo() {
  const res = await net.post<TeaInfoResponse>("/getTeaInfo");
  const data = handleResponse(res);
  return data;
}
