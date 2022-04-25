const mongoose = require("mongoose");


const schema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "please enter the product name"]
    },
    discription:{
        type: String,
        required: [true, "please enter the product discription"]
    },
    category:{
        
            type: String,
            required: [true, "please enter the product category"]
        
    },
    price:{
        type: Number,
        required: true
    },
    rating:{
        type:Number,
        default : true
    },
    stock:{
        type: Number,
        required: true,
        default: 0
    },
    images:[
        {
            public_id: {
                type: String
                
            },
            url: {
                type: String
                
        }
    }
    ],
    numOfReviews : {
        type:Number,
        default : true
    },
    review : {
        name:{
            type: String,
            
        },
        name:{
            type: String,
          
        rating:{
            type:Number,
            default : 0
        }

    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    }

});



module.exports = mongoose.model("product", schema);