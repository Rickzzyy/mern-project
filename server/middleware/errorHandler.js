export const errorHandler = async (err, req, res, next) => {
  const status = req.method === "POST" ? 409 : 500;
  console.error(err.stack);
  res.status(status).json({ error: err.message });
};
