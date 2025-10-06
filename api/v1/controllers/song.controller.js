export const getSong = (req, res) => {
  res.status(200).json({ message: "Song route is working!" });
};

export const createSong = (req, res) => {
  res.status(200).json({ message: "Create song route" });
};
