import { modificarRolService } from "../services/user.services.js";

export const modificarRolPorId = async (req, res) => {
  const { id } = req.params;
  const { idPlan } = req.params;
  const usuarioModificado = await modificarRolService(id, idPlan);
  res.status(200).json({ message: "Rol modificado", usuarioModificado });
};
