import { Router } from "express";

import { teaInfo } from "../mongo/schema";

function installGetPickInfo(router: Router) {
  router.post("/getPickInfo", async (req, res) => {
    const key = req.body.key;
    const regKey = new RegExp(key);

    const mongoRes = await teaInfo.find(
      {
        $or: [{ tid: { $regex: regKey } }, { "pick.num": key }],
      },
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

export default installGetPickInfo;
