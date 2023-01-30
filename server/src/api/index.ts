import express from "express";
import installGetGardenInfo from "./getGardenInfo";
import installGetPickInfo from "./getPickInfo";
import installGetSaleInfo from "./getSaleInfo";
import installGetTeaInfo from "./getTeaInfo";
import installVaildChain from "./vaildChain";

const api = express.Router();
installGetTeaInfo(api);
installVaildChain(api);
installGetGardenInfo(api);
installGetPickInfo(api);
installGetSaleInfo(api);

export default api;
