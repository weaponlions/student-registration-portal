import {useEffect,useContext,useState} from 'react'
import Users from './Users'
import { Link,useNavigate,Outlet } from "react-router-dom";
import { UserContext } from '../../context-api/UserState';

export default function Admin() {

  
  const context = useContext(UserContext);
  const {Allusers,fetchAllusers} = context;


  let navigate= useNavigate();
  const LogoutBtn = ()=>{
    localStorage.removeItem('jwtAdmin');
    navigate('/');
  }


useEffect(() => {
  if(localStorage.getItem('jwtAdmin')){
    // fetchAllusers();

  }
  if(!localStorage.getItem('jwtAdmin')){

  return navigate('/');  
}
})

 
  return (
    <>


   <nav className="navbar  navbar-expand-lg bg-body-tertiary py-0">
  <div className="container-fluid d-flex justify-content-end nav p-2   ">
    <div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mx-4" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      {!localStorage.getItem('jwtAdmin')? <div className='d-flex '> <li className="nav-item  mx-2">
          <Link className="nav-link active h3 text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link active  text-light" aria-current="page" to="/about">About</Link>
        </li>
      
        <li  className="nav-item mx-2"><Link className="nav-link text-light " to="/signup" >Signup</Link></li>
          
    

          <li className="nav-item mx-2"><Link className="nav-link  text-light " to="/login">Login</Link></li> </div>:
          <>
             <li className="nav-item dropdown p-0 m-0 ">
          <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin
          </a>
          <ul className="dropdown-menu  " >
          <li className="nav-item px-2"><Link className="nav-link " style={{padding:"0",margin:"0",color:"red"}}onClick={LogoutBtn}>Logout</Link></li>
          
          </ul>
        </li>
     
          
        
    
          </>
          }

      
      </ul>
      </div>
    </div>
  </div>
</nav>
    <section>
    
          <div className='conatiner my-4 '>

      {/* ---------------------Add Button here -------------- */}
      
      <div className="container d-flex justify-content-end">
        <button className='btn btn-primary'>Add new </button>
      </div>
      <div className="container my-4">
    <table className="table table-striped ">
        <thead>
          <tr>
           
            <th scope="col">Name</th>
            <th scope="col">email</th>
            {/* <th scope="col">Phone</th> */}
            <th scope="col">Action</th>
          </tr>
        </thead>

 {/* ------------here we apply map method on Allusers array of objects  to display all users data ----------- */}
      
       {
        Allusers.map((All)=>{return <Users key = {All.email} AllUsers = {All}/>})
      
       }
     
        </table>
</div>
    </div>
    </section>
    </>
  )
}
