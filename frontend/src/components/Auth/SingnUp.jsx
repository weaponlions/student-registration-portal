import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "./../../assets/images/srp2.png";
import nielitLogo from "./../../assets/images/nielit.png";
import { Link } from "react-router-dom";
import { UserContext } from './../../context-api/UserState';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

function SingnUp() {
  const [credientials, setCredientials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [CaptchaValue, setCaptchaValue] = useState("");
  const navigate = useNavigate();
  const { getUser } = useContext(UserContext);

  const onchangeButton = (e) => {
    if (e.target.name == "user_captcha_input") {
      setCaptchaValue(e.target.value);
    } else {
      setCredientials({ ...credientials, [e.target.name]: e.target.value });
    }
  };


  const submitButton = async (e) => {
    e.preventDefault();

    if (validateCaptcha(CaptchaValue) === true) { 
      loadCaptchaEnginge(6);
      setCaptchaValue("");

      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credientials.name,
          email: credientials.email,
          password: credientials.password,
        }),
      });

      const jso = await response.json();
      console.log(jso);
      if (jso.jwtToken) {
        localStorage.setItem("jwtToken", jso.jwtToken); 
        alert("please check your email");
        navigate("/login");
      } else {
        alert(jso.error);
      }
    } else {
      alert("Captcha Does Not Match");
      setCaptchaValue("");
    }
  };

  useEffect(() => { 
    const jwtVerify = async () => {
      const result = await getUser()
      if (result == true) {
        navigate('/dashboard')
      }  
    }
    jwtVerify()
    loadCaptchaEnginge(6);
  }, []);

  return (
    <section>
      <div className="signup-login-div">
        <div
          className="images-div d-flex flex-column justify-content-center align-items-center"
          style={{ width: "50vw" }}
        >
          <figure>
            <img src={nielitLogo} alt="nielitLogo" className="nielitLogo" />
          </figure>
          <h2>National Institute of Electronics</h2>

          <h4>& Information Technology, Haridwar</h4>
          <figure className="d-flex flex-column justify-content-center align-items-center ">
            <img className="w-75" src={loginImg} alt="LoginImg" />
          </figure>
        </div>

        <form onSubmit={submitButton} style={{ width: "50vw" }}>
          <div className="d-flex flex-column justify-content-center align-items-center mb-4">
            <h5 className="py-2 w-100">
              Welcome to student registration portal
            </h5>
            <h3>Student SignUp</h3>
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="name" className="form-label">
              Your name{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              onChange={onchangeButton}
              minLength={5}
              required
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="email" className="form-label">
              Email{" "}
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={onchangeButton}
              required
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="exampleInputPassword1"
              onChange={onchangeButton}
              minLength={5}
              required
            />
          </div>

          {/* ////////////////////////// captcha code here ///////////////////////////////////////// */}

          <div className="container">
            <div className="form-group">
              <div className="col mt-3">
                <LoadCanvasTemplate />
              </div>

              <div className="col mt-3">
                <div>
                  <input
                    placeholder="Enter Captcha Value"
                    onChange={onchangeButton}
                    id="user_captcha_input"
                    name="user_captcha_input"
                    type="text"
                  ></input>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="mt-2">
            Already register <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default SingnUp;
