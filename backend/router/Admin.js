const Aadmin = require('../models/Admin')
const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const fetchUsersForAdmin = require('../middleware/FetchUsersForAdmin')



router.put('/delUser',fetchUsersForAdmin,async(req,res)=>{
    try {
    
        // find the note by id that we want to update and also secure-------->
        let user = await Notes.findById(req.params.id)
        if(!note){return res.status(401).send('not found')}
    
    // here we chec that the user belongs that note that he want to delete by note.user.string mean the user object in data base convert object id into sring and check equal to login user id or not
    
        if(note.user.toString() !== req.user.id){return res.status(401).send('not allowed')}
    
        note = await Notes.findByIdAndDelete(req.params.id,{new:true});
        res.json({success:'note deleted succesful'});
    
            
        } catch(error){
            res.status(500).json({error: "internal server error occured"})
            console.log(error);
        }

})