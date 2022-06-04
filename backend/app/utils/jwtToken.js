const jwt = require("jsonwebtoken");
exports.sendToken = (user, statusCode, res)=>{
    const getJWTToken = function(user){
        console.log(user[0].id)
        return jwt.sign({id: user[0].id}, "asjksjdasdkxzcsvhjahdkjshadkcvsakd", {
            expiresIn: "5d",
        });
    
    }
    const token = getJWTToken(user);
    const options = {
        expire: new Date(Date.now+ 5*24*60*60*1000),
        httpOnly: true
    }

    res.status(statusCode).cookie("token", token, options).json({sucess: true, token})
}