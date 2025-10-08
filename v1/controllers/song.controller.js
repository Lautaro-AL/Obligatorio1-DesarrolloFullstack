import {
  getSongsService,
  getCancionesPorCategoriaService,
} from "../services/song.services.js";

export const getSongs = async (req, res) => {
  const songs = await getSongsService();
  res.status(200).json(songs);
};

export const getCancionesPorCategoria = async (req, res) => {
  const { id } = req.params;
  const canciones = await getCancionesPorCategoriaService(id);
  res.status(200).json({ canciones });
};
