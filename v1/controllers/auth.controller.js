import { loginService, registerService } from "../services/auth.services.js";

export const login = async (req, res) => {
  const { username, password } = req.body;
  const token = await loginService(username, password);
  if (!token)
    return res.status(401).json({ message: "Credenciales inválidas" });
  res.status(200).json({ message: "Login exitoso", token });
};

export const register = async (req, res) => {
  const { username, password, plan } = req.body;
  const token = await registerService(username, password, plan);
  res.status(200).json({ message: "Usuario registrado correctamente", token });
};
