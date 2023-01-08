import express from "express";

import { mongoinit } from "./mongo";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("ok!");
});

async function main() {
  await mongoinit();

  app.listen(port, () => {
    console.log(`the server running on port ${port}`);
  });
}

main();
