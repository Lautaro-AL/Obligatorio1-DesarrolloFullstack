import Categorias from "../models/categoria.model.js";

export const obtenerCategoriasService = async () => {
  const categorias = await Categorias.find();
  if (!categorias || categorias.length === 0) {
    const err = new Error("No se encontraron categorías");
    err.status = 404;
    throw err;
  }
  return categorias;
};
