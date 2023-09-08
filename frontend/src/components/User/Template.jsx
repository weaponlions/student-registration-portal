import  { useEffect, useContext, useState } from 'react'
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from '../../context-api/UserState';
import Sidebar from './Items/Sidebar';
import Footer from '../UI/Footer';
import Navbar from '../UI/Navbar';
import "./Items/animation.css";
import { initialize_StepOne, userInfo } from '../../api/index';

export default function Template() {

  const { getUser, userdata, isadmin } = useContext(UserContext) 
  const navigate = useNavigate(); 
  const location = useLocation();

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
 

  useEffect(() => {
    const jwtVerify = async () => {
      const result = await getUser();
      if (!result) { 
        navigate("/login");
      } 
      if (isadmin == true) {
        navigate("/admin")
      }
    }
    jwtVerify()
  }, [location])
 
  return (
    <>
      <div className={!openSidebarToggle ? 'grid-container': 'sidebar_hide'}> 
        <Navbar hamicon={true} OpenSidebar={OpenSidebar}/>  
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} /> 
        <div className='main-container m-4'>
          <Outlet />  
        </div>
      </div> 
    </>
  )
}

