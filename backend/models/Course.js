import mongoose from 'mongoose';

 
 
const courseSchema = mongoose.Schema({
    course_name: { type: String, required: true },
    course_duration: { type: Number, required: true },
    course_fees: { type: Number, required: true },
    eligibility: { type: [String] },
    course_category: { type: String, required: true }, 
    introduced_at: { type: Date, required: true, default: Date.now },
})

const batchSchema = mongoose.Schema({
    course_id: { type: mongoose.Schema.ObjectId, required: true },
    batch_name: { type: String, required: true },
    batch_fees: { type: Number, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    actual_end_date: { type: Date },
    status: { type: String, required: true, enum: ['upcoming', 'ended', 'ongoing', 'cancel']  },
    user_list: { type: [
        {
            user_id : {type: mongoose.Schema.ObjectId, required: true }, 
            applied_at: {type: Date, default: Date.now, required: true }
        }
    ]},
    created_at: { type: Date, required: true, default: Date.now },
})


export const courseModel = mongoose.model('Courses', courseSchema);
export const batchModel = mongoose.model('Batches', batchSchema);
 