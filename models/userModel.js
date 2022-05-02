var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name:String,
    email:String,
    username:String,
    password:String,
    created_at: {
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User',userSchema);