import mongoose from "mongoose";
import { Schema } from "mongoose";

const cancionSchema = new Schema({
  titulo: { type: String, required: true },
  artista: { type: String, required: true },
  duracion: Number,
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: "Categoria" },
});
export default mongoose.model("Song", cancionSchema);
