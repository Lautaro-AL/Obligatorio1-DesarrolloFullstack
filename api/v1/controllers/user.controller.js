import { modificarRolService } from "../services/auth.services.js";

export const modificarRolPorId = async (req, res) => {
  const { id } = req.params;
  const { rol } = req.body;
  const usuarioModificado = await modificarRolService(id, rol);
  res.status(200).json({ message: "Rol modificado", usuarioModificado });
};
