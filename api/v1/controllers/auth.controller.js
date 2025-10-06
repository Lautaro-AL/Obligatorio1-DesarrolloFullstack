import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export const login = (req, res) => {
  //clase 9-9 min 1:02 buscar en bd y validar o clase 11-9 min 0:06
  console.log(req.body);
  let data = req.body;
  const { password } = data;
  const valida = bcrypt.compareSync(password, ""); //async
  if (!valida) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }
  const token = jwt.sign({ username: data.username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return res.status(200).json({ message: "Login successful", data });
};

export const register = (req, res) => {
  console.log(req.body);
  let data = req.body;
  const { password } = data;
  const hash = bcrypt.hashSync(password, 10); //o transformar en async

  const token = jwt.sign({ username: data.username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return res
    .status(200)
    .json({ message: "Registrationnn successful", data, token }); //token
};
