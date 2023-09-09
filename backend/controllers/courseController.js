import { batchModel, courseModel } from "../models/courseModel.js";
import { isRequired } from "../middleware/fieldMiddleware.js";
 
 export const getCourses = async (req, res) => { 
  try {
    const category = req.query.category;
    let courses = null;
    if (category && category !== null) {
      courses = await courseModel.find({course_category: category})
    }
    else{
      courses = await courseModel.find(); 
    } 
    return res.json({ status: "done", result: courses });
  } catch (err) {
    console.log(err.message);
    return res.json({ status: "failed", error: err.message });
  }
 };

export const createCourse = async (req, res) => {
  try {
    const data = isRequired(req.body, [
      "course_name",
      "fees",
      "duration_time",
      "duration_type",
      "category",
    ]);
    const record = courseModel(data);
    await record.save();
    console.log(record);
    return res.json({ status: "done", data: record });
  } catch (err) {
    console.log(err.message);
    return res.json({ status: "failed", error: err.message });
  }
};


export const createBatch = async (req, res) => {
  try {
    const data = isRequired(req.body, [
      "course_id",
      "batch_name",
      "end_date",
      "start_date",
    ]);

    data["start_date"] = `${data.start_date}.000+00:00`;
    data["end_date"] = `${data.end_date}.000+00:00`;

    let isUnique = await batchModel.find({
      course_id: data.course_id,
      end_date: { $gte: data.start_date },
    });
    if (isUnique.length > 0) throw Error("Batch is Exists");

    data["batch_fees"] = (
      await courseModel.findById(data.course_id, "course_fees")
    ).course_fees;
    data["status"] = "ongoing";
    const result = batchModel(data);
    await result.save();
    return res.json({ status: "done", data: result });
  } catch (err) {
    console.log(err.message);
    return res.json({ status: "failed", error: err.message });
  }
};



export const enrollBatch = async (req, res) => {
  try {
    const data = isRequired(req.body, ["user_id", "course_id"]);
    let currBatch =
      (await batchModel.findOne({
        course_id: data.course_id,
        status: "ongoing",
      })) || undefined;
    if (currBatch) {
      currBatch.user_list.forEach((e) => {
        if (e.user_id == data.user_id) throw Error("User is Exist");
      });
      currBatch.user_list.push({ user_id: data.user_id });
      await currBatch.save();
    }
    return res.json({ status: "done", data: currBatch });
  } catch (err) {
    console.log(err.message);
    return res.json({ status: "failed", error: err.message });
  }
};
