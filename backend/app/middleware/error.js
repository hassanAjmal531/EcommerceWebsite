const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "internalserver error";

    res.status(err.statusCode).json(
        {success: true,
        error: err,
        message: err.message
    }
    )
}