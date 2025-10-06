import { crearPlaylistService } from "../services/playlist.services.js";

export const crearPlaylist = async (req, res) => {
  const { nombre, descripcion } = req.body;
  const nuevaPlaylist = await crearPlaylistService({
    nombre,
    descripcion,
  });
  res.status(200).json({ message: "Playlist creada", nuevaPlaylist });
};
