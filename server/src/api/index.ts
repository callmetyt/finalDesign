import express from "express";

import installGetTeaInfo from "./getTeaInfo";
import installVaildChain from "./vaildChain";

const api = express.Router();
installGetTeaInfo(api);
installVaildChain(api);

export default api;
