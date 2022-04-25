const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/FreshWaterAquatic";

const connectDb = ()=> mongoose.connect(uri).then((data)=>{
    console.log("database successfully connected");
}).catch((err)=>{
    return err;
});

module.exports = connectDb;