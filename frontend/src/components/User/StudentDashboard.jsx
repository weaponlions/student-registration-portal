import  { useEffect,useContext } from 'react'
import { useNavigate, Outlet,Link } from "react-router-dom";
import { UserContext } from '../../context-api/UserState';
import Navbar from '../UI/Navbar';
import Footer from '../UI/Footer';
import nielit from "../../assets/images/nielit.png";


export default function StudentDashboard() {

  const context = useContext(UserContext)
  const { getUser, userdata } = context;
  let navigate= useNavigate();

  useEffect(() => {
   
    const jwtVerify = async () => {
      const result = await getUser()
      if (result==false) {
       
        // navigate("/login");
      }
      else{
        switch (userdata.status) {
          case 'NEW':
            navigate('/dashboard/courses')
            break;
          case 'lvl1':
            navigate('/dashboard/step1')
            break;
          case 'lvl2':
            navigate('/dashboard/step2')
            break;
          case 'lvl3':
            navigate('/dashboard/step3')
            break;
          default:
            break;
        }
      }
    }
    jwtVerify()
  },[])
  
  return (
<>

     <Navbar title={"Dashboard"} />


      <div className="row w-100 h-100">

{/* ------------////////////////////// SideBAr //////////////////////////----------------/ */}

        <div className="col-md-2">
          <nav
            class="nav flex-column "
            style={{
              height: "100vh",
              position: "fixed",
              width: "auto",
              backgroundColor: "var(--primary)",
            }}
          >
            <Link class="nav-link active " to="#">
              <img
                src={nielit}
                alt="nielit"
                style={{ width: "9rem", color: "white" }}
              />
            </Link>
            <Link class="nav-link text-light" to="/dashboard" >
              NIELIT Courses
            </Link>
            <Link class="nav-link text-light" to="/dashboard/history">
              Last Applied
            </Link>
          </nav>
        </div>

{/* -------------------////////////// Content ///////////////////------------------------------- */}
<div className="col-md-10">
<Outlet/>
</div>
        </div>
        <footer/>
      </>

  )
}

