import { Router } from "express";

import blockChain from "../blockChain/init";

function installVaildChain(router: Router) {
  router.post("/vaildChain", (req, res) => {
    const vaildRes = blockChain.validateChain();

    res.json({
      code: 200,
      body: vaildRes,
    });
  });
}

export default installVaildChain;
