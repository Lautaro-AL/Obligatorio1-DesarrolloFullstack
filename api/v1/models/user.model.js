import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  plan: { type: String, enum: ["plus", "premium"], default: "plus" },
});

export default mongoose.model("User", userSchema);
