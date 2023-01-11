import { createHash } from "crypto";
import { Model } from "mongoose";

import { TeaInfo } from "../types";
import { isObjEmpty } from "../utils";

class Block {
  teaInfo: TeaInfo;
  private nonce: number;
  previousHash: string | null;
  hash: string;

  constructor(teaInfo: TeaInfo, previousHash: string | null) {
    this.vaildTeaInfo(teaInfo);

    this.teaInfo = teaInfo;
    this.previousHash = previousHash;
    this.nonce = 1;
    this.hash = this.computeHash();
  }

  private vaildTeaInfo(teaInfo: TeaInfo) {
    isObjEmpty(teaInfo);
  }

  computeHash() {
    const sha256 = createHash("sha256");
    const stringToHash =
      JSON.stringify(this.teaInfo) + this.previousHash + this.nonce;
    return sha256.update(stringToHash).digest("hex");
  }

  getAnswer(difficulty: number) {
    return new Array(difficulty).fill("0").join("");
  }

  mine(difficulty: number) {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (this.hash.substring(0, difficulty) !== this.getAnswer(difficulty)) {
        this.nonce++;
        this.hash = this.computeHash();
      } else {
        break;
      }
    }
    // console.log("挖矿结束", this.hash);
  }
}

// 区块 的 链
// 生成祖先区块
class Chain {
  chain: Block[];
  private difficulty: number;

  constructor(difficulty: number) {
    this.chain = [];
    this.difficulty = difficulty;
  }

  setDifficulty(difficulty: number) {
    this.difficulty = difficulty;
  }

  async initChain(teaInfoModel: Model<TeaInfo>) {
    const existsTeaInfo = await teaInfoModel.find();

    const existsBlocks: Block[] = [];
    let previousHash = null;
    for (let i = 0; i < existsTeaInfo.length; i++) {
      const { tid, garden, pick, sale } = existsTeaInfo[i];
      const curTeaInfo = {
        tid,
        garden,
        pick,
        sale,
      };
      const curBlock: Block = new Block(curTeaInfo, previousHash);
      existsBlocks.push(curBlock);
      // console.log("cur block", curTeaInfo, curBlock, previousHash);
      previousHash = curBlock.hash;
    }

    this.chain = existsBlocks;
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  mineNewBlock(teaInfo: TeaInfo) {
    // 挖矿
    const newBlock = new Block(teaInfo, this.getLatestBlock().hash);
    newBlock.mine(this.difficulty);

    // 添加区块到区块链
    this.chain.push(newBlock);
  }

  validateChain() {
    // 验证第一个block
    if (this.chain[0].hash !== this.chain[0].computeHash()) {
      throw new Error("数据发生篡改!");
    }

    // 验证后续的block
    for (let i = 1; i <= this.chain.length - 1; i++) {
      const blockToValidate = this.chain[i];
      //当前的数据有没有被篡改
      if (blockToValidate.hash !== blockToValidate.computeHash()) {
        throw new Error("数据发生篡改!");
      }
      //我们要验证区块的previousHash是否等于previous区块的hash
      const previousBlock = this.chain[i - 1];
      if (blockToValidate.previousHash !== previousBlock.hash) {
        throw new Error("前后区块链接断裂");
      }
    }
    console.log("区块链验证无误", this.chain);
    return true;
  }
}

export { Chain, Block };
