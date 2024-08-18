import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const connectBD = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connected failed:", err.message);
    process.exit(1);
  }
};
