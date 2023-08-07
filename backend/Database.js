const mongoose = require('mongoose');
/////////////---------------connection string to mongodb------------//////////////////////////

const uri = "mongodb+srv://nick4800:hellonicK847786@cluster0.kgr8onc.mongodb.net/Student_RP?retryWrites=true&w=majority";

const connectToDataBase = ()=>{
  mongoose.connect(uri).then(()=>{
    console.log('conncection successful to database')}).catch((err)=>{console.log("no conncection",err)})
}



module.exports = connectToDataBase;

