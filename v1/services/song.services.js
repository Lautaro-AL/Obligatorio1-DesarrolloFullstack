import Song from "../models/song.model.js";

export const getSongsService = async () => {
  const songs = await Song.find().populate("categoria", "nombre -_id");
  if (!songs.length) {
    const err = new Error("No se encontraron canciones");
    err.status = 404;
    throw err;
  }
  return songs;
};

export const getCancionesPorCategoriaService = async (categoriaId) => {
  const canciones = await Song.find({ categoria: categoriaId }).populate(
    "categoria",
    "nombre"
  );
  if (!canciones.length) {
    let err = new Error("No se encontraron canciones para esta categoría");
    err.status = 404;
    throw err;
  }
  return canciones;
};
