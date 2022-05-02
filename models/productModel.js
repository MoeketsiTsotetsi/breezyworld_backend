var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    image:String,
    created_at: {
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product',productSchema);