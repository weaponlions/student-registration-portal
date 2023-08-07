let jwt = require('jsonwebtoken');
const jwt_sing = 'nielit_123'

const fetUser = (req,res,next)=>{

const jwtAdmin = req.header('jwtAdmin');
if(!jwtAdmin){
    res.status(401).json({ error: 'please enter valid credientials'})
}
try{
    const data = jwt.verify(jwtAdmin, jwt_sing);

    req.user = data.user
   next();
} catch (error) {
    res.status(401).json({ error: 'please enter valid credientials'})

    
}

}
module.exports = fetUser;