const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {type : String, require : true,},
    email: {type:  String, require : true, unique: true},
    password: {type: mongoose.Mixed, require : true},
    date: {type: Date, default : Date.now},
})
const User = mongoose.model('Users', userSchema);

module.exports = User;