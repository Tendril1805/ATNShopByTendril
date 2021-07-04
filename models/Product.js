const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    Product_Code: {
        type: String,
        required: true,
        trim: true,
    },
    Product_Name: {
        type: String,
        required: true,
        trim: true,
    },
    Price: {
        type: Number,
        required: true,
        min: 0,
    },
    Describe: {
        type: String,
        required: true,
        trim: true,
    },
    MadeIn: {
        type: String,
        required: true,
        trim: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
    image: {
        type: String,
        trim: true,
    },
});

ProductSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
    });

const Product = mongoose.model("Product", ProductSchema, "Product");

///
module.exports = Product;


 

 
