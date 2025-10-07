import Categorias from "../models/categoria.model.js";

export const obtenerCategoriasService = async (req, res) => {
  const categorias = await Categorias.find();
  return categorias;
};
