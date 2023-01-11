import { AxiosResponse } from "axios";

import { TeaInfoResponse } from "../types";

export function handleResponse(response: AxiosResponse<TeaInfoResponse>) {
  const { data } = response;
  const { code, body } = data;
  switch (code) {
    case 200:
      return body;
    default:
      throw new Error(`unknow code: ${code}`);
  }
}
