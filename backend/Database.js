import mongoose from "mongoose"; 
/////////////---------------connection string to mongodb------------//////////////////////////

const uri = "mongodb+srv://nick4800:hellonicK847786@cluster0.kgr8onc.mongodb.net/Student_RP?retryWrites=true&w=majority";
// const uri = "mongodb://0.0.0.0:27017";

export const connectToDataBase = () => {
  mongoose
    .connect(uri, { dbName: "Student_RP" })
    .then(async () => {
      console.log("conncection successful to database");
      // return
      // const a = await courses.courseModel.create({
      //   course_name: 'Java',
      //   course_duration: 6,
      //   course_fees: 500,
      //   eligibility: [],
      //   course_category: 'it',
      //   applied_user: [{user_id: '64d1cd19691f5d611c23a655'}]
      // })
      // console.log(a);
    })
    .catch((err) => {
      console.log("no conncection", err);
    });
};
 
