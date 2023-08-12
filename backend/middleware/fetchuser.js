import jwt from 'jsonwebtoken'
 
const jwt_sing = "nielit_123";

export const verifyUser = (req, res, next) => {
  const jwtToken = req.header("jwtToken");
  if (!jwtToken) {
    res.status(401).json({ error: "please enter valid credientials" });
  }
  try {
    const data = jwt.verify(jwtToken, jwt_sing); 
    return res.json({'result': true}) 
  } catch (error) {
    return res.json({'result': false})
  }
};

