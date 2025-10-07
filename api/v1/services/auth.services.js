import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerService = async (username, password, plan) => {
  const usuarioExistente = await User.findOne({ username });
  if (usuarioExistente) {
    let err = new Error("El nombre de usuario ya existe");
    err.status = 409;
    throw err;
  }
  const hash = await bcrypt.hash(password, 10);
  const nuevoUsuario = new User({ username, password: hash, plan });
  await nuevoUsuario.save();
  const token = jwt.sign({ id: nuevoUsuario._id }, process.env.JWT_SECRET, {
    expiresIn: "6h",
  });
  return token;
};

export const loginService = async (username, password) => {
  const usuario = await User.findOne({ username });
  if (!usuario || !bcrypt.compareSync(password, usuario.password)) {
    let err = new Error("Credenciales inválidas");
    err.status = 401;
    throw err;
  }
  const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, {
    expiresIn: "6h",
  });
  return token;
};
