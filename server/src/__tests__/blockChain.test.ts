import { describe, test, expect } from "@jest/globals";

import { Block, Chain } from "../blockChain";

import { mockTeaInfo1, mockTeaInfo2 } from "./data";

describe("区块链测试", () => {
  test("1. 构建区块链", () => {
    const chain = new Chain(1);
    chain.chain = [new Block(mockTeaInfo1, null)];
    expect(chain.validateChain()).toBe(true);
  });

  test("2. 添加新区块", () => {
    const chain = new Chain(1);
    chain.chain = [new Block(mockTeaInfo1, null)];
    chain.mineNewBlock(mockTeaInfo2);
    expect(chain.validateChain()).toBe(true);
  });

  test("3. 修改区块数据", () => {
    const chain = new Chain(1);
    chain.chain = [new Block(mockTeaInfo1, null)];
    chain.mineNewBlock(mockTeaInfo2);
    chain.chain[1].teaInfo.garden.name = "另一个种植园";
    expect(() => {
      chain.validateChain();
    }).toThrowError("数据发生篡改!");
  });

  test("4. 修改区块链关系", () => {
    const chain = new Chain(1);
    chain.chain = [new Block(mockTeaInfo1, null)];
    chain.mineNewBlock(mockTeaInfo2);
    chain.chain[1].previousHash = null;
    chain.chain[1].hash = chain.chain[1].computeHash();
    expect(() => {
      chain.validateChain();
    }).toThrowError("前后区块链接断裂");
  });
});
