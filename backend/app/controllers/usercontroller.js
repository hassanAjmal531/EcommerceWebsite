const ErrorHander = require("../utils/errorhandler");
const asyncErrorHandler = require("../utils/AsyncErrorHandler");
const User = require("../models/userModel");
const bcrpyt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport")
const {sendToken} = require("../utils/jwtToken");
const { default: mongoose } = require("mongoose");
exports.registerUser = asyncErrorHandler(async(req, res, next)=>{
    console.log(req.body);
    const user = await User.create(req.body);
    const token = user.getJWTToken();

    if(!user){
        return next(new ErrorHandler("internal server error", 500));

    }
    sendToken(user, 200, res);
});

exports.showAllUsers = asyncErrorHandler(async(req, res, next)=>{
    const users = await User.find();
    if(!users){
        return next(new ErrorHandler("internal server error", 500));

    }
    res.status(200).json({
        status: true,
        users
    })

});

exports.findUser = asyncErrorHandler(async (req, res, next)=>{
    const user= await User.findById({id: req.params.id});
    if(!user){
        return next(new ErrorHandler("no user found", 404));

    }
    res.status(200).json({
        status: true,
        user
    })
});

exports.updateuser = asyncErrorHandler(async (req, res, next)=>{
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





exports.login = asyncErrorHandler(async (req, res, next)=>{
    const {email, password} = req.body;
   
    
    console.log(email);
    if(!email || !password) return next(new ErrorHander("please enter email and password ", 400));
    const user = await User.find({email: email}).select("+password");
    
    if(user[0].password !== password ){
        res.json({
            success: false,
            message: "not found.... please enter valid number"
        })
    }
    else{
        
        sendToken(user, 200, res);
    }

    });


exports.logout = asyncErrorHandler(async(req, res, next)=>{
    
    
    const cookie = req.cookies.token;
    console.log(cookie)
    res.cookie("token", null, {expires: new Date(Date.now()), httpOnly: true});
    
    res.status(200).json({
        success: true,
        message: "logged out" 
    })
});

exports.getUserDetails= asyncErrorHandler(async (req, res, next)=>{
    const id = mongoose.Types.ObjectId(req.id);
    console.log(id);
    const user = await User.findById({id:id});
    if(! user){
        res.status(500).json({success: true, message: "found"});
    }

    res.status(200).json({success: true,user});
});



