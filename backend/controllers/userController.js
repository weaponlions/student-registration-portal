import { userDocModel, userInfoModel, userQualificationModel } from '../models/User.js';
import { isRequired } from '../middleware/fieldMiddleware.js';

// user_id, name, f_name, m_name, mobile_num, mobile_num, whatsapp_num, gender
// category, marital_status, religion, pwd, ews, address, full_address, state
// district, city, pincode

export const userStepOne = async (req, res) => {
    try {
        const data = isRequired(req.body, ['user_id', 'name', 'f_name', 'm_name', 'mobile_num', 'gender', 'category', 'marital_status', 'religion', 'pwd', 'ews'])
        const address = isRequired(req.body, ['state', 'district', 'city', 'pincode', 'full_address'])
        const old = await userInfoModel.findOne({user_id: data.user_id}) || undefined
        if (old) 
            throw Error('User Info is Exists')
        data.address = address
        const new_data = userInfoModel(data)
        console.log(new_data);
        return res.json({status: 'success', data: [new_data]})
    } catch (err) {
        console.log(err.message);
        return res.json({status: 'failed', error: err.message})
    }
}


// user_id, qualification, subject, institute, university, passing_year, percentage, division
export const userStepTwo = async (req, res) => {
    try {
        const data = isRequired(req.body, ['user_id', 'qualification', 'subject', 'institute', 'university', 'passing_year', 'percentage', 'division'])
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