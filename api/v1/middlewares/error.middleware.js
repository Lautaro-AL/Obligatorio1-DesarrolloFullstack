export const errorMiddleware = (err, req, res, next) => {
  //no exponer
  //console.log(err.stack);
  return res
    .status(err.status || 500)
    .json({ error: err.message || "Error interno del servidor" });
};
