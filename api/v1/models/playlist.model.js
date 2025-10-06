import mongoose from "mongoose";
import { Schema } from "mongoose";

const playlistSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: false },
  canciones: [{ type: [Schema.Types.ObjectId], ref: "Song", default: [] }],
  creadoPor: { type: Schema.Types.ObjectId, ref: "User", required: false },
});

export default mongoose.model("Playlist", playlistSchema);
