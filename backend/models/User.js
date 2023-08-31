import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {type : String, require : true },
    email: {type:  String, require : true, unique: true },
    password: {type: mongoose.Mixed, require : true },
    status: {type:  String, require : true, enum: ['unverified', 'verified', 'admin'], default: 'unverified' },
    created_at: {type: Date, default : Date.now },
})
  

const infoSchema = new mongoose.Schema({
    user_id: {type: Object, required: true, unique: true },
    name: {type : String, require : true },
    father: {type : String, require : true },
    mother: {type : String, require : true },
    dob: {type : Date, require : true },
    mobile: {type : String, require : true },
    whatsapp: {type : String },
    gender: {type : String, require : true, enum: ['M', 'F', 'T'] },
    category: {type : String, require : true, enum: ['OBC', 'SC', 'ST', 'GENERAL', 'OTHERS'] },
    marital: {type : String, require : true, enum: ['SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED'] },
    religion : {type : String, require : true },
    pwd : {type : String, require : true, enum: ['YES', 'NO'] },
    ews : {type : String, require : true, enum: ['YES', 'NO'] },
    correspond: {
        full_address: {type : String, require : true },
        state: {type : String, require : true },
        district: {type : String, require : true },
        city: {type : String, require : true },
        pincode: {type : String, require : true },
    },
    permanent: {
        full_address: {type : String, require : true },
        state: {type : String, require : true },
        district: {type : String, require : true },
        city: {type : String, require : true },
        pincode: {type : String, require : true },
    },
    updated_at: {type: Date, default : Date.now},
})


const educationSchema = mongoose.Schema({ 
    user_id: {type: Object, required: true },
    exam_name: {type : String, require : true },
    exam_type: {type : String, require : true, enum: ['Graduation', 'Post Graduation', '10', '12', 'other'] },
    institute: {type : String, require : true },
    university: {type : String, require : true },
    passing_year: {type : Number, require : true }, 
    percentage: {type : Number, require : true }, 
    division: {type : String, require : true },
    // doc_path: {type: String, required: false },
    updated_at: {type: Date, default : Date.now},
})


const docSchema = mongoose.Schema({
    user_id: {type: Object, required: true, unique: true },
    aadhar: {type: String },
    photo: {type: String },
    leftThumb: {type: String },
    sign: {type: String }, 
    updated_at: {type: Date, default : Date.now},
})


export const User = mongoose.model('Users', userSchema);
export const educationModel = mongoose.model('Education', educationSchema)
export const docModel = mongoose.model('User_Documents', docSchema)
export const infoModel = mongoose.model('Information', infoSchema) 
 