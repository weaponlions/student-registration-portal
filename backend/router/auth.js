import { Router } from "express";
import { body } from "express-validator"; 
import { verifyUser } from "../middleware/fetchuser.js";  
import { signUp, singIn, adminSignIn } from "../controllers/authController.js";

const router = Router();

//----------------------- endpoint for Singnup for /api/auth -------------------->

router.post( "/signup",
  [
    body("name").isLength({ min: 5 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ], 
  signUp
);

// ////////////////////Endpoint for login user =--------------------------------------->

router.post(
  "/login",
  [
    body("email", "enter a valid email").isEmail(),
    body("password", "password can not be blank").exists(),
  ],
  singIn
);

// #####---------------Endpoint for get the data of user ----------------------------------->

router.get("/getuser", verifyUser);

// ---------------//////////////////////// Endpoint for add admin -----------///////////////////

//   router.post('/admin', [
//     body('email').isEmail(),
// body('password').isLength({ min: 5 })
//   ],async(req,res)=>{
//     const errors = validationResult(req);

//       if(!errors.isEmpty()){
//         return res.status(400).json({errors: errors.array()});
//       }

//   //////// --------------------display error for for duplicate email-------///////////------->

//       try{
// let admin = await  Aadmin.findOne({email:req.body.email});
// if(admin){return  res.status(400).json("email already registered");}

//       const salt = await bcrypt.genSalt(10);

//       const secPassword = await bcrypt.hash(req.body.password,salt);

//      admin = Aadmin.create({
//         email:req.body.email,
//         password:secPassword,
//       });
//       /////////// ---------------- jwt token -------------------------------------------->

//       res.send("successful added");

//     }
//     catch(error){console.log(error)
//     console.log("inernal server error");
//     }

//   });

// ---------------////////////////Endtpoint for adminlogin //////////////////////////////--------------------

router.post(
  "/adminlogin",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
   adminSignIn
);

export default router;
