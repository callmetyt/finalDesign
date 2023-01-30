import { Router } from "express";

import { teaInfo } from "../mongo/schema";

function installGetSaleInfo(router: Router) {
  router.post("/getSaleInfo", async (req, res) => {
    const key = req.body.key;
    const regKey = new RegExp(key);

    const mongoRes = await teaInfo.find(
      {
        $or: [
          { tid: { $regex: regKey } },
          { "sale.shop": key },
          { "sale.transport": key },
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

export default installGetSaleInfo;
