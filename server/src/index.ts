import express from "express";
import cors from "cors";

import { mongoinit } from "./mongo";
import { teaInfo } from "./mongo/schema";
import blockChain, { initBlockChain } from "./blockChain/init";

const app = express();
const port = 4000;

app.use(cors());

app.post("/find", async (req, res) => {
  const mongoRes = await teaInfo.find();

  res.json({
    body: mongoRes,
    code: 200,
  });
});

app.get("/vaildChain", async (req, res) => {
  const vaildRes = blockChain.validateChain();

  res.json({
    code: 200,
    body: vaildRes,
  });
});

async function main() {
  await mongoinit();
  await initBlockChain();

  app.listen(port, () => {
    console.log(`the server running on port ${port}`);
  });
}

main();
