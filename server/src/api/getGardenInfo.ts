import { Router } from "express";

import { teaInfo } from "../mongo/schema";

function installGetGardenInfo(router: Router) {
  router.post("/getGardenInfo", async (req, res) => {
    const key = req.body.key;
    const regKey = new RegExp(key);

    const mongoRes = await teaInfo.find(
      {
        $or: [
          { tid: { $regex: regKey } },
          { "garden.name": { $regex: regKey } },
          { "garden.teaType": { $regex: regKey } },
          { "garden.address": { $regex: regKey } },
        ],
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

export default installGetGardenInfo;
