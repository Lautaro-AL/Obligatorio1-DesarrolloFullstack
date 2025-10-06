import { getSongsService } from "../services/song.services.js";

export const getSongs = async (req, res) => {
  const songs = await getSongsService();
  res.status(200).json(songs);
};
