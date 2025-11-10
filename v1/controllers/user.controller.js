import {
  modificarRolService,
  obtenerPlanesService,
} from "../services/user.services.js";

export const modificarRolPorId = async (req, res) => {
  const { id } = req.params;
  const { idPlan } = req.params;
  const usuarioModificado = await modificarRolService(id, idPlan);
  res.status(200).json({ message: "Rol modificado", usuarioModificado });
};

export const obtenerPlanes = async (req, res) => {
  try {
    const planes = await obtenerPlanesService();
    res.status(200).json(planes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: error.message });
  }
};
