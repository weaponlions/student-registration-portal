const { Router } = require('express')
const { courseModel, batchModel } = require('./../models/Course.js')

const routes = Router()

const isRequired = (data, arr) => { 
    let user_data = {}
    arr.forEach((e) => {
        if (!data[e] || data[e] == '') {
            throw Error(`${e} field is required`)
        }else{
            user_data[e] = data[e];
        }
    });
    return user_data;
}

routes.post('/create', async (req, res) => {
    try {
        const data = isRequired(req.body, ['course_name', 'course_fees', 'course_duration', 'course_category'])
        const record = courseModel(data)
        await record.save()
        console.log(record);
    } catch (err) {
        console.log(err.message);
    }
    return res.json({})
})


module.exports = routes