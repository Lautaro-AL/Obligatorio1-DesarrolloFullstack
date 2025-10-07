import mongoose from "mongoose";
import { Schema } from "mongoose";

const categoriaSchema = new Schema({
  nombre: { type: String, required: true, unique: true },
  descripcion: String,
});

export default mongoose.model("Categoria", categoriaSchema);
