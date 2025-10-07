import mongoose from "mongoose";
import { Schema } from "mongoose";
import Plan from "./plan.model.js";
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  plan: {
    type: Schema.Types.ObjectId,
    ref: "Plan",
    required: true,
    default: "68e502d54af25e185a3c3ce6",
  },
});

export default mongoose.model("User", userSchema);
