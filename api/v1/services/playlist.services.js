import Playlist from "../models/playlist.model.js";

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

export const eliminarPlaylistService = async (id) => {
  const playlistEliminada = await Playlist.findByIdAndDelete(id);
  if (!playlistEliminada) {
    let err = new Error("No se encontro la playlist");
    err.status = 404;
    throw err;
  }

  return playlistEliminada;
};