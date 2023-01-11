import { Chain } from ".";
import { teaInfo } from "../mongo/schema";

const blockChain = new Chain(1);

export async function initBlockChain() {
  await blockChain.initChain(teaInfo);
}

export default blockChain;
