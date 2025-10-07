import Playlist from "../models/playlist.model.js";
import Song from "../models/song.model.js";

export const crearPlaylistService = async (nuevaPlaylist) => {
  const playlist = new Playlist(nuevaPlaylist);
  await playlist.save();
  return playlist;
};

export const obtenerPlaylistsService = async () => {
  const playlists = await Playlist.find();
  return playlists;
};

export const modificarPlaylistService = async (id, datosActualizados) => {
  let playlistModificada;

  try {
    playlistModificada = await Playlist.findByIdAndUpdate(
      id,
      datosActualizados,
      { new: true }
    );
  } catch (error) {
    let err = new Error("Error al modificar la playlist");
    err.status = 400;
    throw err;
  }

  if (!playlistModificada) {
    let err = new Error("No se encontro la playlist");
    err.status = 404;
    throw err;
  }

  return playlistModificada;
};

export const agregarCancionAPlaylistService = async (
  playlistId,
  cancionId,
  usuarioId
) => {
  const playlist = await Playlist.findById(playlistId).populate("creadoPor");
  if (!playlist) {
    let err = new Error("Playlist no encontrada");
    err.status = 404;
    throw err;
  }
  if (playlist.creadoPor._id.toString() !== usuarioId.toString()) {
    {
      let err = new Error("No tienes permiso para modificar esta playlist");
      err.status = 403;
      throw err;
    }
  }
  const cancion = await Song.findById(cancionId);
  if (!cancion) {
    let err = new Error("Cancion no encontrada");
    err.status = 404;
    throw err;
  }
  if (playlist.creadoPor.plan === "plus" && playlist.canciones.length >= 10) {
    let err = new Error("Usuarios plus solo pueden 10 canciones por playlist");
    err.status = 400;
    throw err;
  }
  playlist.canciones.push(cancionId);
  await playlist.save();
  return await Playlist.findById(playlistId)
    .populate("canciones")
    .populate("creadoPor", "username");
};

export const eliminarPlaylistService = async (id) => {
  const playlistEliminada = await Playlist.findByIdAndDelete(id);
  if (!playlistEliminada) {
    let err = new Error("No se encontro la playlist");
    err.status = 404;
    throw err;
  }

  return playlistEliminada;
};
