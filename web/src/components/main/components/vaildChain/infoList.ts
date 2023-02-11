const originText = [
  "区块序号x: 验证中...",
  "区块序号x: 正在计算hash",
  "区块序号x: 比对hash... 正确√",
  "区块序号x: 验证previousHash... 正确√",
];

function createInfoList(size: number): string[] {
  const res = [];
  for (let i = 1; i <= size; i++) {
    res.push(...originText.map((text) => text.replace(/x/, `${i}`)));
  }
  return res;
}

export default createInfoList;
