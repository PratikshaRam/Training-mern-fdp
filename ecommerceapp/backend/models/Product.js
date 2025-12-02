const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String},
    price:{type:Number,required:true},
    stock:{type:Number,default:0},
    seller:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'},
        image:{type:String},
    },
    { timestamps: true }
    );
    module.exports = mongoose.model('Product', productSchema);