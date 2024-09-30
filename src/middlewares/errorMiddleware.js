

function notFoundMiddleware (req, res, next) {
    res.status(404).json({
      error: 'Not Found',
      message: `Cannot find ${req.originalUrl}`,
    });
  };

  function errorHandler (err, req, res, next) {
    console.error(err.stack);
  
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
  
    res.status(statusCode).json({
      error: message,
    });
  };

  module.exports = {notFoundMiddleware , errorHandler }