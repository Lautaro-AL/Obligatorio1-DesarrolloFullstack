import { obtenerCategoriasService } from "../services/categorias.services.js";

export const obtenerCategorias = async (req, res) => {
  const categorias = await obtenerCategoriasService();
  res.status(200).json(categorias);
};
