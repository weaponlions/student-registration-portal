import { docModel, infoModel, educationModel } from '../models/User.js';
import { isRequired } from '../middleware/fieldMiddleware.js';

// user_id, name, father, mother, mobile, whatsapp, gender
// category, marital, religion, pwd, ews, address, full_address, state
// district, city, pincode

export const userStepOne = async (req, res) => {
    try {
        const data = isRequired(req.body, ['user_id', 'name', 'father', 'mother', 'mobile', 'gender', 'category', 'marital', 'religion', 'pwd', 'ews'])
        const permanent = isRequired(req.body.permanent, ['state', 'district', 'city', 'pincode', 'full_address'])
        const correspond = isRequired(req.body.correspond, ['state', 'district', 'city', 'pincode', 'full_address'])
        const old = await infoModel.findOne({user_id: data.user_id}) || undefined
        if (old) 
            throw Error('User Info is Exists')
        data.permanent = permanent
        data.correspond = correspond
        const new_data = infoModel(data)
        console.log(new_data);
        return res.json({status: 'success', data: [new_data]})
    } catch (err) {
        console.log(err.message);
        return res.json({status: 'failed', error: err.message})
    }
}


// user_id, exam_name, subject, institute, university, passing_year, percentage, division, exam_type
export const userStepTwo = async (req, res) => {
    try {
        const data = isRequired(req.body, ['user_id', 'exam_name', 'subject', 'institute', 'university', 'passing_year', 'percentage', 'division', 'exam_type'])
         console.log(data);
        return res.json({status: 'success', data: []})
    } catch (err) {
        console.log(err.message);
        return res.json({status: 'failed', error: err.message})
    }
}

// user_id, aadhar_path, photo_path, leftThumb_path, sign_path, tenth_path, twelfth_path
export const userStepThree = async (req, res) => {
    try {
        const data = isRequired(req.body, ['user_id', 'qualification', 'subject', 'institute', 'university', 'passing_year', 'percentage', 'division'])
         console.log(data);
        return res.json({status: 'success', data: []})
    } catch (err) {
        console.log(err.message);
        return res.json({status: 'failed', error: err.message})
    }
}