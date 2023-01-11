import mongoose from "mongoose";
import { TeaInfo } from "../../types";

const { Schema } = mongoose;

const teaInfoSchema = new Schema<TeaInfo>({
  tid: Number,
  garden: {
    name: String,
    teaType: String,
    altitude: Number,
    ph: Number,
    area: Number,
    address: String,
  },
  pick: {
    num: Number,
    time: Number,
  },
  sale: {
    transport: Number,
    time: Number,
    shop: Number,
  },
});

export const teaInfo = mongoose.model("teaInfo", teaInfoSchema, "teaInfo");
