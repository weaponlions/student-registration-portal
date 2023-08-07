const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
 
    email: {type:  String, require : true, unique: true},
    password: {type: mongoose.Mixed, require : true},
    date: {type: Date, default : Date.now},
})
const Aadmin = mongoose.model('Admin', adminSchema);

module.exports = Aadmin;