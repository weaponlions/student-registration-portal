const { Router } = require('express')
const { Course } = require('./../models/Course.js')

const routes = Router()

const isRequired = (data, arr) => { 
    arr.forEach((e) => {
        if (!data[e] || data[e] == '') {
            throw Error(`${e} field is required`)
        }
    });
}

routes.post('/create', async (req, res) => {
    try {
        isRequired(req.body, ['course_name', 'course_fees', 'course_duration', 'course_category'])
        
    } catch (err) {
        console.log(err.message);
    }
    return res.json({})
})


module.exports = routes