const ErrorHander = require("../utils/errorhandler");
const asyncErrorHandler = require("../utils/AsyncErrorHandler");
const User = require("../models/userModel");

exports.registerUser = asyncErrorHandler(async(req, res, next)=>{
    console.log(req.body);
    const user = await User.create(req.body)

    if(!user){
        return next(new ErrorHandler("internal server error", 500));

    }
    res.status(200).json({
        status: true,
        user
    })
});

exports.showAllUsers = asyncErrorHandler((req, res, next)=>{
    const users = await User.find();
    if(!users){
        return next(new ErrorHandler("internal server error", 500));

    }
    res.status(200).json({
        status: true,
        users
    })

});

exports.findUser = asyncErrorHandler((req, res, next)=>{
    const user= await User.findById({id: req.params.id});
    if(!user){
        return next(new ErrorHandler("no user found", 404));

    }
    res.status(200).json({
        status: true,
        user
    })
});

exports.updateuser = asyncErrorHandler((req, res, next)=>{
    const user= await User.findById({id: req.params.id});
    if(!user){
        return next(new ErrorHandler("no user found", 404));

    }
    user = await User.findByIdAndUpdate({id: req.params.id}, req.body);
    if(!user){
        return next(new ErrorHandler("internal server error", 500));

    }
    res.status(200).json({
        status: true,
        user
    })
});