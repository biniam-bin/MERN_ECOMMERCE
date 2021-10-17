const Product = require("../models/productModels");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const apiFeatures = require("../utils/apiFeatures");


//Create New Product
exports.createProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true, 
        product
    })
})

//Get All Products
exports.getAllProducts = catchAsyncError(async (req, res) => {
    const apiFeatures = new apiFeatures(Product.find(), req.query);
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    });
})

//Get product Details
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product){
        return next(new ErrorHandler("Product not found", 404))
    }
    res.status(200).json({
        success: true,
        product
    })
})

// Update Product
exports.updateProduct = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product){
        return res.status(500).json({
            success: false,
            message: "Product Not found"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        product
    })
});

// Delete product (Admin)
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product){
        return res.status(500).json({
            success: false,
            message: "Product Not found"
        })
    }
    await product.remove();
    res.status(200).json({
        success: true,
        message: "Product deleted successfuly"
    })
})