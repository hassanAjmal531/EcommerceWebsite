const AsyncErrorHandler = require("../utils/AsyncErrorHandler");
const ErrorHandler = require("../utils/errorhandler");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
exports. isAuth = AsyncErrorHandler(async(req, res, next)=>{
    const token = req.cookies.token;
    if(!token){
        return next(new ErrorHandler("please login to access this resource", 401));

    }
    const data = jwt.verify(token,"asjksjdasdkxzcsvhjahdkjshadkcvsakd");
    console.log(data.id);
   
    req.id = data.id;
    
    next();
});