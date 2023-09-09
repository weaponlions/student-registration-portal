import mongoose from "mongoose"; 
import { courseModel } from "./models/courseModel.js"; 

// const uri = "mongodb+srv://nick4800:hellonicK847786@cluster0.kgr8onc.mongodb.net/Student_RP?retryWrites=true&w=majority";
const uri = "mongodb://0.0.0.0:27017";
const connectToDataBase = mongoose.connect(uri, { dbName: "STUDENT_PORTAL" })

export default connectToDataBase;
    

 
// const a = await courseModel.find({introduced_at: {
      //   $gte: '2023-08-11T00:00:00.000+00:00',
      //   $lte: Date.now()
      // }}, "course_name")
      // console.log(a)