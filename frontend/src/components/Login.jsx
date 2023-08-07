import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import loginImg from '../assets/images/srp2.png'
import nielitLogo from '../assets/images/nielit.png'
import { Outlet, Link } from "react-router-dom";

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';



function Login() {
    const [credientials, setCredientials] = useState({email:"",password:""})
    const [CaptchaValue, setCaptchaValue] = useState("");
    const onchangeButton = (e)=>{
        setCredientials({...credientials, [e.target.name] : e.target.value});
        setCaptchaValue(e.target.value);
    }
    let navigate= useNavigate();
    
   
const submitButton = async(e)=>{
  e.preventDefault();

 
   

    if (validateCaptcha(CaptchaValue)===true) {
        // alert('Captcha Matched');
        loadCaptchaEnginge(6); 
        setCaptchaValue("")


/////////////////////////////####### ^^^^^^check if the user is admin or not^^^^^#########/////////////////////////////
// admin1298###
        if(credientials.email === "admin456$$$@gmail.com"){
          const response = await fetch("http://localhost:5000/auth/adminlogin", {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          
         },
          body: JSON.stringify({email:credientials.email,password: credientials.password})
       });

       const jsoadmin = await response.json();
       if(jsoadmin.jwtAdmin){
        localStorage.setItem('jwtAdmin',jsoadmin.jwtAdmin);
         return navigate('/admin');

       }else{
        return alert("enter valid credientials");
       }
          
        }
    
        
    try {
      
   
        const response = await fetch("http://localhost:5000/auth/login", {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          
         },
          body: JSON.stringify({email:credientials.email,password: credientials.password})
       });
       const jso = await response.json();
  
       if(jso.jwtToken){
       console.log(jso.jwtToken);
        localStorage.setItem('jwtToken',jso.jwtToken);
        navigate("/dashboard");
  
       }
       else{
     
        alert(jso.error);
       }


      } catch (error) {
      alert("internal server error",error.message)
      }
   } 



    else {
        alert('Captcha Does Not Match');
        setCaptchaValue("")



        
    }



 
}



useEffect(() => {
  loadCaptchaEnginge(6); 
},[])


  return (
    <section >
    <div className='signup-login-div'>
      <div className='images-div d-flex flex-column justify-content-center align-items-center' style={{width:"50vw"}}>
        <figure>
          <img src={nielitLogo} alt="nielitLogo" className='nielitLogo' />
          </figure>
          <h2>National Institute of Electronics</h2>  

        <h4>& Information Technology, Haridwar</h4>
          <figure className='d-flex flex-column justify-content-center align-items-center ' ><img className='w-75' src={loginImg} alt="LoginImg" /></figure>
      </div>
          <form onSubmit={submitButton} style={{width:"50vw"}}>
            <div className='d-flex flex-column justify-content-center align-items-center mb-4'>
            <h5 className='py-2 w-100'>Welcome to student registration portal</h5>
          <h3>Student Login</h3>
            </div>
         
      <div className="mb-3 w-100" style={{width:"50vw"}}>
        <label htmlFor="email" className="form-label">Username </label>
        <input type="text" className="form-control" id="email" name= "email" required minLength={5}  aria-describedby="emailHelp" onChange={onchangeButton}/>
      </div>
      <div className="mb-3 w-100">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" id="exampleInputPassword1" required minLength={5} onChange={onchangeButton} />
  </div>



{/* ////////////////////////// captcha code here ///////////////////////////////////////// */}
 
           <div className="container">
               <div className="form-group">

                   <div className="col mt-3">
                       <LoadCanvasTemplate />
                   </div>   

                   <div className="col mt-3">
                       <div><input placeholder="Enter Captcha Value" onChange={onchangeButton}  id="user_captcha_input" name="user_captcha_input" type="text"></input></div>
                   </div>
                     
               </div>

           </div>

    <div className="d-flex justify-content-center ">

      <button  type="submit" className="btn btn-primary mb-2" >Submit</button>
      
    </div>
      <p>Don't have an account <Link to="/signup">Sign Up</Link></p>
    </form>
    </div>
    </section>
  )
}

export default Login