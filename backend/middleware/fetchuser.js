let jwt = require('jsonwebtoken');
const jwt_sing = 'nielit_123'

const fetUser = (req,res,next)=>{

const jwtToken = req.header('jwtToken');
if(!jwtToken){
    res.status(401).json({ error: 'please enter valid credientials'})
}
try{
    const data = jwt.verify(jwtToken, jwt_sing);

    req.user = data.user
   next();
} catch (error) {
    res.status(401).json({ error: 'please enter valid credientials'})

    
}

}
module.exports = fetUser;