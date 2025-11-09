import {
  crearPlaylistService,
  eliminarPlaylistService,
  obtenerPlaylistsService,
  modificarPlaylistService,
  agregarCancionAPlaylistService,
  obtenerPlaylistsPorIdService,
} from "../services/playlist.services.js";

export const crearPlaylist = async (req, res) => {
  const { nombre, descripcion, imagen } = req.body;
  const id = req.user.id;
  const nuevaPlaylist = await crearPlaylistService({
    nombre,
    descripcion,
    imagen,
    creadoPor: id,
  });
  res.status(201).json({ message: "Playlist creada", nuevaPlaylist });
};

export const obtenerPlaylists = async (req, res) => {
  const { id } = req.user;
  const playlists = await obtenerPlaylistsService(id);
  res.status(200).json(playlists);
};
export const obtenerPlaylistPorId = async (req, res) => {
  const { id } = req.params;
  const playlist = await obtenerPlaylistsPorIdService(id);
  res.status(200).json(playlist);
};

export const modificarPlaylistPorId = async (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;
  const pModificada = await modificarPlaylistService(id, datosActualizados);
  res.status(200).json({ message: "Playlist modificada", pModificada });
};

export const agregarCancionAPlaylist = async (req, res) => {
  const { playlistId, cancionId } = req.body;
  const usuarioId = req.user.id;
  const resultado = await agregarCancionAPlaylistService(
    playlistId,
    cancionId,
    usuarioId
  );
  res.status(200).json(resultado);
};

export const eliminarPlaylist = async (req, res) => {
  const { id } = req.params;
  const pEliminada = await eliminarPlaylistService(id);
  res.status(200).json({ message: "Playlist eliminada ", pEliminada });
};
