import Song from "../models/song.model.js";

export const getSongsService = async () => {
  const songs = await Song.find();
  return songs;
};
