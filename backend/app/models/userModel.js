const mongoose = require("mongoose");
const validator = require("validator");
const bcrpyt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const user = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please specify a name"]
    },
    email:{
        type: String,
        required: [true, "please enter your email"],
        unique: true,
        validate: [validator.isEmail, "please enter a valid email"] 
    },
    password: {
        type: String,
        required: [true, "please enter your password"],
        minlength: [8, "password cannot be less than 8 chars"],
        select: false
    },
    role:{
        type: String,
        default: "user"
    },
    resetPassToken: String,
    resetPassExp: Date

});

user.pre("save", async function(next){
   
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrpyt.hash(this.password, 10);
});

user.methods.getJWTToken = function(){
    return jwt.sign({id: this.id}, "asjksjdasdkxzcsvhjahdkjshadkcvsakd", {
        expiresIn: "5d",
    })
}

user.methods.comparepasswords= async function(password){
    return bcrpyt.compare(password, this.password);
}
module.exports = mongoose.model("user", user);