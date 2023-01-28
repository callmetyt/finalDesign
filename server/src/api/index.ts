import express from "express";
import installGetGardenInfo from "./getGardenInfo";

import installGetTeaInfo from "./getTeaInfo";
import installVaildChain from "./vaildChain";

const api = express.Router();
installGetTeaInfo(api);
installVaildChain(api);
installGetGardenInfo(api);

export default api;
