import User from "../models/user.model.js";
import Plan from "../models/plan.model.js";

export const modificarRolService = async (username, idPlan) => {
  const usuario = await User.findOne({ username }).select("username plan");
  const plan = await Plan.findById(idPlan);

  if (!usuario) {
    const err = new Error("No se encontró el usuario");
    err.status = 404;
    throw err;
  }

  if (!plan) {
    const err = new Error("No se encontró el plan");
    err.status = 404;
    throw err;
  }

  usuario.plan = plan._id;
  await usuario.save();

  return usuario.populate("plan", "-__v -_id");
};

export const obtenerPlanesService = async () => {
  try {
    const planes = await Plan.find();
    return planes;
  } catch (error) {
    throw new Error("Error al obtener los planes: " + error.message);
  }
};

export const obtenerUsuarioPorUsernameService = async (username) => {
  try {
    const usuario = await User.findOne({ username }).populate(
      "plan",
      "-__v -password"
    );
    return usuario;
  } catch (error) {
    console.error("Error en user.service:", error);
    throw error;
  }
};
