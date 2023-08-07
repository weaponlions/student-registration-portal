import  { useEffect,useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context-api/UserState';
import Navbar from './Navbar';

export default function StudentDashboard() {

  const context = useContext(UserContext)
  const {getUser} = context;
  let navigate= useNavigate();

  useEffect(() => {
    getUser();
  if(!localStorage.getItem('jwtToken')){
    navigate("/login");
      }
  })
  
  return (
<>
<Navbar/>
  <section>

 <nav className="navbar  navbar-expand-lg bg-body-tertiary p-0">
  <div className="container-fluid d-flex justify-content-center text-white bg-dark p-2  ">
    <div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item  mx-2">
          <a className="nav-link active h3 text-light" aria-current="page" href="#">Registration form</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link active h3 text-light" aria-current="page" href="#">Edit Registration form</a>
        </li>
     
        <li className="nav-item mx-2">
          <a className="nav-link active h3 text-light" aria-current="page" href="#">NIELIT Courses</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link active h3 text-light" aria-current="page" href="#">Applied courses</a>
        </li>

       
      </ul>
      </div>
    </div>
  </div>
</nav>

</section>

</>
  )
}

