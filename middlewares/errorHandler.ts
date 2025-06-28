export const errorHandler = (err, req, res, next) => {
  res.status(400).json({
    message: "Validation failed",
    success: false,
    error: err,
  });
};
