import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {type : String, require : true },
    email: {type:  String, require : true, unique: true },
    password: {type: mongoose.Mixed, require : true },
    status: {type:  String, require : true, enum: ['NEW', 'lvl1', 'lvl2', 'lvl3', 'unverified', 'verified', 'admin'], default: 'lvl1' },
    created_at: {type: Date, default : Date.now },
})
  

const userInfoSchema = new mongoose.Schema({
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
    pwd : {type : Boolean, require : true, default: false },
    ews : {type : Boolean, require : true, default: false },
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


const userQualificationSchema = mongoose.Schema({ 
    user_id: {type: Object, required: true },
    qualification: {type : String, require : true },
    subject: {type : String, require : true },
    institute: {type : String, require : true },
    university: {type : String, require : true },
    passing_year: {type : Number, require : true }, 
    percentage: {type : Number, require : true },
    division: {type : String, require : true },
    updated_at: {type: Date, default : Date.now},
})


const userDocSchema = mongoose.Schema({
    user_id: {type: Object, required: true, unique: true },
    aadhar_path: {type: String, required: true },
    photo_path: {type: String, required: true },
    leftThumb_path: {type: String, required: true },
    sign_path: {type: String, required: true },
    tenth_path: {type: String, required: true },
    twelfth_path: {type: String},
    updated_at: {type: Date, default : Date.now},
})


export const User = mongoose.model('Users', userSchema);
export const userQualificationModel = mongoose.model('User_Qualification', userQualificationSchema)
export const userDocModel = mongoose.model('User_Documents', userDocSchema)
export const userInfoModel = mongoose.model('User_Information', userInfoSchema) 
 