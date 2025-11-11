import {
  modificarRolService,
  obtenerPlanesService,
  obtenerUsuarioPorUsernameService,
} from "../services/user.services.js";

export const modificarRolPorUsername = async (req, res) => {
  const { username } = req.params;
  const { idPlan } = req.params;
  const usuarioModificado = await modificarRolService(username, idPlan);
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

export const obtenerUsuarioPorUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const usuario = await obtenerUsuarioPorUsernameService(username);

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(usuario);
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    res.status(500).json({ message: "Error al obtener usuario" });
  }
};
