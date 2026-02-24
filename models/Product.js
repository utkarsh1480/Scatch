
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_Name: {
        type: String,
        required:true
    },
    product_Price: {
        type: Number,
        required: true,
      
    },
    discount: {
        type: String,
        default:0
        
    },
    bgcolor: {
        type: String,
        
    },
    panelColor: {
        type: String,
       
    },
   
    textColor: {
        type: String,
       
    },
    product_picture: {
        type : String
    }
})

const product = mongoose.model("product", productSchema);
module.exports = product;