import mongoose from "mongoose";
import { Schema } from "mongoose";

const planSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
});

export default mongoose.model("Plan", planSchema, "planes");
