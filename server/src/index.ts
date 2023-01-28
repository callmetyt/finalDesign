import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { mongoinit } from "./mongo";
import { initBlockChain } from "./blockChain/init";
import api from "./api";

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

async function main() {
  await mongoinit();
  await initBlockChain();

  app.use("/api", api);

  app.listen(port, () => {
    console.log(`the server running on port ${port}`);
  });
}

main();
