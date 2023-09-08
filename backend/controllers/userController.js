import { docModel, infoModel, educationModel } from '../models/User.js';
import { isRequired } from '../middleware/fieldMiddleware.js';
import fs from 'fs';

// user_id, name, father, mother, mobile, whatsapp, gender
// category, marital, religion, pwd, ews, address, full_address, state
// district, city, pincode

export const userStepOne = async (req, res) => {
    try {
        const old = await infoModel.findOne({user_id: req.body.user_id}) || undefined;
        const update = req.body || undefined;
        if (old)
            return res.json({message: 'Please user is old', error: 'exist'});

        const data = isRequired(req.body.userData, ['name', 'father', 'mother', 'mobile', 'gender', 'category', 'marital', 'religion', 'pwd', 'ews', 'dob']);
        const permanent = isRequired(req.body.permanent, ['state', 'district', 'city', 'pincode', 'full_address']);
        const correspond = isRequired(req.body.correspond, ['state', 'district', 'city', 'pincode', 'full_address']);
        data.permanent = permanent;
        data.correspond = correspond;
        data.user_id = req.body.user_id;
        console.log({update});
        console.log({data});
        if (update === true) {
            old.updateOne(data)
            await old.save()
            return res.json({status: 'success', data: [old]})  
        }
        else {
            const new_data = infoModel(data);
            await new_data.save() 
            return res.json({status: 'success', data: [new_data]})  
        }
    } catch (err) {
        console.log(err.message); 
        return res.status(400).json({status: 'failed', error: err.message})
    }
}


// user_id, exam_name, institute, university, passing_year, percentage, division, exam_type
export const userStepTwo = async (req, res) => {
    try {
        const old = await educationModel.findOne({user_id: req.body.user_id}) || undefined
        if (old) 
            return res.json({message: 'Please user is old', error: 'exist'}) 
        
        let { tenth, twelfth } = req.body;
        tenth = isRequired(tenth, ['exam_name', 'institute', 'university', 'passing_year', 'percentage', 'division', 'exam_type'])
        twelfth = isRequired(twelfth, ['exam_name', 'institute', 'university', 'passing_year', 'percentage', 'division', 'exam_type'])
        
        let mod = await educationModel.create({...tenth, user_id: req.body.user_id});
        console.log(mod);
        mod = await educationModel.create({...twelfth, user_id: req.body.user_id});
        console.log(mod);
        return res.json({data: []})
    } catch (err) {
        console.log(err.message);
        return res.json({error: err.message})
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


export const userInformation = async (req, res) => {
    try {
        const { user_id } = req.body;
        const userData = await infoModel.findOne({user_id}).lean()
        if (userData) {
            const permanent = userData?.permanent
            const correspond = userData?.correspond
            delete userData.correspond
            delete userData.permanent
            console.log(userData);
            return res.json({result: [{ userData, permanent, correspond }]});            
        }
        else
            return res.json({result: []})
    } catch (err) {
        console.log(err.message);
        return res.status(400).json({error: err.message})
    }
}

export const userEducation = async (req, res) => {
    try {
        const { user_id } = req.body;
        const userData = await educationModel.find({user_id}).lean()
        console.log(userData);
        if (userData) {
            return res.json({result: userData});            
        }
        else
            return res.json({result: []})
    } catch (err) { 
        console.log(err.message);
        return res.status(401).json({error: err.message})
    }
}


export const fileReciever = async (req, res) => {
    try {
        const file = req.files[0];
        const { fieldname, user_id, user_name } = req.body;

        console.log(file);
        let path = `./upload/student/`;
        if (!fs.existsSync(path))
            fs.mkdirSync(path)
        path = `${path}${user_name.replace(' ', '-')}-${user_id}/`;
        if (!fs.existsSync(path))
            fs.mkdirSync(path)

        path = `${path}/${file.originalname}`;
        
        let model = await docModel.find({user_id});

        if (model.length == 1) {
            model = await docModel.findOneAndUpdate({user_id}, {[fieldname]: path});
            model.save();
        }
        else{
            model = await docModel.create({user_id, [fieldname]: path}) 
        } 
        fs.writeFileSync(path, file.buffer); 
        return res.status(200).json({message: 'done'})

    } catch (err) {
        console.log(err.message);
        return res.status(401).json({error: err.message})            
    }
}


