import jwt from 'jsonwebtoken'
 
const jwt_sing = "nielit_123";

export const verifyUser = (req, res) => {
  const jwtToken = req.header("jwtToken");
  if (!jwtToken) { 
    return res.status(401).json({'result': false})
  }
  try {
    jwt.verify(jwtToken, jwt_sing);
    return res.json({'result': true}) 
  } catch (error) {
    return res.status(401).json({'result': false})
  }
};


export const verifyJwt = (req, res, next) => {
  const jwtToken = req.header("jwtToken"); 
  if (!jwtToken) {
    return res.status(400).json({ error: "please enter valid credientials" });
  }
  try {
    jwt.verify(jwtToken, jwt_sing);
    const { user_id } = jwt.decode(jwtToken) 
    req.body.user_id = user_id
    next()
  } catch (error) {
    return res.status(400).json({error: 'Please Verify First'})
  }
};