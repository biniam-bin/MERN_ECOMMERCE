const mongoose = require("mongoose")


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter product name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Enter product description"]
    },
    price: {
        type: Number,
        required: [true, "Enter Product price"],
        maxlength: [8, "Price digit cant be more than 8"]
    },
    rating: {
        type: String,
        default: 0,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true,
            }
        }
    ],
    
    category: {
        type: String,
        required: [true, "Please enter category"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        maxlength: [4, "Stock cant exceed 4 characters"],
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            name: {
                type: String,
                required: true,

            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Product", productSchema);
