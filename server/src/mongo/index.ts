import mongoose from "mongoose";

export async function mongoinit() {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/", {
      dbName: "finalDesign",
    });
    console.log("mongoDB connect success");
  } catch (err) {
    console.log(`mongoDB connect error: ${err}`);
  }
}
