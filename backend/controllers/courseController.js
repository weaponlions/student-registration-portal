import { batchModel, courseModel, categoryModel } from "../models/courseModel.js";
import { isRequired } from "../middleware/fieldMiddleware.js";
 
export const getCourses = async (req, res) => { 
  try {
    const { category, course_name } = req.query;
    
    let courses = null; 
    if (category && category != null) {
      courses = await courseModel.find({category: category})
    }
    else if (course_name && course_name != null) {
      courses = await courseModel.find({course_name: {$regex : `.*${course_name.toLowerCase()}.*`}})
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
      "duration_time",
      "duration_type",
      "category",
      "fees",
    ]);
    const record = courseModel(data);
    await record.save(); 
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


export const createCategory = async (req, res) => {
  try {
    const data = isRequired(req.body, ["category"]);
    const result = categoryModel(data);
    await result.save();
    return res.json({ status: "done", data: result });
  } catch (err) {
    console.log(err.message);
    return res.json({ status: "failed", error: err.message });
  }
}

export const updateCategory = async (req, res) => {
  try {
    const data = isRequired(req.body, ["category"]);
    const result = await categoryModel.findByIdAndUpdate(
      req.query.id,
      data,
      { new: true }
    );
    return res.json({ status: "done", data: result });
  } catch (err) {
    console.log(err.message);
    return res.json({ status: "failed", error: err.message });
  }
}

export const getCategories = async (req, res) => {
  try {
    const { category } =  req.query;
    let result = null;
    if (category && category != null) {
      result = await categoryModel.find({ category: category }, {category: 1, _id: 0});
    }
    else {
      result = await categoryModel.find({}, {category: 1, _id: 0}).lean();
    }
    return res.json({ status: "done", result });
  } catch (err) {
    console.log(err.message);
    return res.json({ status: "failed", error: err.message });
  }
}