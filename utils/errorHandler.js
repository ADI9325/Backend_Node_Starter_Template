const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    error: err.message || 'Server Error',
  });
};

module.exports = errorHandler;
