import {
  crearPlaylistService,
  eliminarPlaylistService,
  obtenerPlaylistsService,
  modificarPlaylistService,
} from "../services/playlist.services.js";

export const crearPlaylist = async (req, res) => {
  const { nombre, descripcion } = req.body;
  const nuevaPlaylist = await crearPlaylistService({
    nombre,
    descripcion,
  });
  res.status(200).json({ message: "Playlist creada", nuevaPlaylist });
};

export const obtenerPlaylists = async (req, res) => {
  const playlists = await obtenerPlaylistsService();
  res.status(200).json(playlists);
};

export const modificarPlaylistPorId = async (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;
  const pModificada = await modificarPlaylistService(id, datosActualizados);
  res.status(200).json({ message: "Playlist modificada", pModificada });
};

export const eliminarPlaylist = async (req, res) => {
  const { id } = req.params;
  const pEliminada = await eliminarPlaylistService(id);
  res.status(200).json({ message: "Playlist eliminada ", pEliminada });
};
