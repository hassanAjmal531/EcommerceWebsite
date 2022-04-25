
const Products = require("../models/ProductModel");
const ErrorHandler = require("../utils/errorhandler");
const Features = require("../utils/features");
exports.getAllProducts = (req, res)=>{
    res.json({message:"jasjaksdj"});
};

exports.displayAllProducts = async (req, res, next)=>{
    const limit = 3;
    console.log(req.params);
    var features = new Features(Products.find(), req.query).Search().filter().pagination(limit);
    const products = await features.query;
    if(!products){
        return next(new ErrorHandler("product not found", 404));
    }
    res.status(200).json({
        status: true,
        products
    })

}

exports.createProduct = async (req, res, next)=>{


    const product = await Products.create(req.body);
    if(!product){
        return next(new ErrorHandler("internal server error", 500));

    }
    res.status(200).json({
        status: true,
        product
    })
};

exports.findProduct = async (req, res, next)=>{
    var features = new Features()
    const product = await Products.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("product not found", 404));
    }
    res.status(200).json({
        status: true,
        product
    })
}

exports.deleteProduct = async (req, res, next)=>{
    const product = await Products.findById(req.params.id);
    if (!product){
       
        return next(new ErrorHandler("product not found", 404));

    }
    const Delete = await Products.deleteOne({id: req.params.id});
    res.status(200).json({
        status: true,
        product
    })
    
}

exports.updateProduct = async (req, res, next)=>{
    
    var product = await Products.findById(req.params.id);
    if (!product){
        return next(new ErrorHandler("product not found", 404));

    }

    product  = await Products.findByIdAndUpdate(req.params.id, req.body);
    if (!product){
        return next(new ErrorHandler("internal server error", 500));

    }
    res.status(200).json({
        status: true,
        product
    })

}
