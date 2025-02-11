const AppError = require('./AppError');
const logger = require('./logger');

const errorHandler = (err, req, res, next) => {
  logger.error(`[${err.name}] ${err.message}`, { stack: err.stack });

  let statusCode = 500;
  let message = 'Something went wrong';

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err.name === 'ValidationError') {
    statusCode = 400;
    message = err.message;
  } else if (err.code === 11000) {
    statusCode = 409;
    message = 'Duplicate field value (email/username)';
  } else if (err.details) {
    statusCode = 400;
    message = err.details[0].message;
  }

  res.status(statusCode).json({
    success: false,
    error: message,
  });
};

module.exports = errorHandler;
