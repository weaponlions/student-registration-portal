import { User } from "../models/User.js";
import { Aadmin } from "../models/Admin.js";
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';
import { body, validationResult } from 'express-validator'

const jwt_sing = "nielit_123";

export const signUp = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //////// --------------------display error for for duplicate email-------///////////------->

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "user already exists" });
      }

      // ------------------making salt and hash function for secure password-------------->

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      /////////// ---------------- jwt token -------------------------------------------->

      const data = {
        user: {
          id: user.id,
        },
      };
      const jwtToken = jwt.sign(data, jwt_sing);

      ///////----------------------  res.json(user)-------------->

      res.json({ jwtToken });

      /////////////////////////// sending mail to the user ////////////////////////////////////////////////////////////

      if (jwtToken) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "nk999549@gmail.com",
            pass: "mqitkvdjuzrzwago",
          },
        });

        const { email, password } = req.body;
        async function main() {
          const info = await transporter.sendMail({
            from: "<nk999549@gmail.com>",
            to: email,
            subject: "User Details",

            html: `<div style={{border: 2px solid:black}}>
                      <h2>Dear Applicant,</h2>
            
                      <h2>Welcome to Student Registration Portal NIELIT Haridwar</h2>
                      
                      <h2>Your login account details are as follows:
                      <br>
                      Registered Email: ${email}
                      <br>
                      Username: ${email}
                      <br>
                      Password: ${password}</h2>
                      
                    </div>`,
          });

          console.log("Message sent");
        }

        main().catch(console.error);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server error" });
      console.log(error);
    }
  }


export const singIn = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty) {
    return res.status(400).json({ error: "please enter valid credientials" });
  }

  try {
    const { email, password } = req.body;

    // //////----------------verify email of user --------------------------------------/////////-------->

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ error: "Email is not register Please Signup" });
    }

    //////////--------- verify password of user -------------------------------------------------------->

    const comparePass = await bcrypt.compare(password, user.password);
    if (!comparePass) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    ///////////////////------- jwt token ----------------------------------------------------------------->

    const jwtToken = jwt.sign(
      {
        user_id: user.id,
        name: user.name,
        email: user.email,
        status: user.status,
      },
      jwt_sing
    );
    res.json({ jwtToken });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
    console.log(error);
  }
}


export const adminSignIn = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    /////////////////-----------display error for for duplicate email-------////////////////////------->

    try {
      let admin = await Aadmin.findOne({ email: req.body.email });

      if (!admin) {
        return res.status(400).json("not allowed");
      }

      const { email, password } = req.body;

      const comparePassword = await bcrypt.compare(password, admin.password);
      if (!comparePassword) {
        return res.status(400).json({ error: "Incorrect password" });
      }

      /////////// ---------------- jwt token -------------------------------------------->

      const data = {
        user: {
          id: admin.id,
        },
      };
      const jwtAdmin = jwt.sign(data, jwt_sing);

      res.send({ jwtAdmin });
    } catch (error) {
      console.log(error);
      console.log("inernal server error");
    }
  }