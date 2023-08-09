const mongoose = require("mongoose");
const courses = require("./models/Course")
/////////////---------------connection string to mongodb------------//////////////////////////

// const uri = "mongodb+srv://nick4800:hellonicK847786@cluster0.kgr8onc.mongodb.net/Student_RP?retryWrites=true&w=majority";
const uri = "mongodb://0.0.0.0:27017";

const connectToDataBase = () => {
  mongoose
    .connect(uri, { dbName: "STUDENT_PORTAL" })
    .then(() => {
      console.log("conncection successful to database");
    })
    .catch((err) => {
      console.log("no conncection", err);
    });
};

module.exports = connectToDataBase;
