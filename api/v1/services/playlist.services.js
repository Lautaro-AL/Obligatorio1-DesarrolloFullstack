import Playlist from "../models/playlist.model.js";

export const crearPlaylistService = async (nuevaPlaylist) => {
  const playlist = new Playlist(nuevaPlaylist);
  await playlist.save();
  return playlist;
};

//terminar login y register clase 16-9
