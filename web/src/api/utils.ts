/* eslint-disable no-unused-vars */
import { AxiosResponse } from "axios";

import { TeaInfo, TeaInfoResponse, VaildChainResponse } from "../types";

type PossibleResponseType = TeaInfoResponse | VaildChainResponse;
type PossibleResponseDataType = TeaInfo[] | boolean;

export function handleResponse(
  response: AxiosResponse<TeaInfoResponse>
): TeaInfo[];
export function handleResponse(
  response: AxiosResponse<VaildChainResponse>
): boolean;

export function handleResponse(
  response: AxiosResponse<PossibleResponseType>
): PossibleResponseDataType {
  const { data } = response;
  const { code, body } = data;
  switch (code) {
    case 200:
      return body;
    default:
      throw new Error(`unknow code: ${code}`);
  }
}
