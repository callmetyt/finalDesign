import { Router } from "express";

import { teaInfo } from "../mongo/schema";

function installGetTeaInfo(router: Router) {
  router.post("/getTeaInfo", async (req, res) => {
    const mongoRes = await teaInfo.find(
      {},
      {
        _v: 0,
        _id: 0,
      }
    );

    res.json({
      code: 200,
      body: mongoRes,
    });
  });
}

export default installGetTeaInfo;
