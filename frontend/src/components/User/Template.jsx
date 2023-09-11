import  { useEffect, useContext, useState } from 'react'
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from '../../context-api/UserState';
import Sidebar from './Items/Sidebar'; 
import Navbar from '../UI/Navbar';
import "./Items/animation.css"; 

export default function Template() {

  const { validateUser } = useContext(UserContext) 
  const navigate = useNavigate(); 
  const location = useLocation();

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
 
  useEffect(() => {
    (async () => {
      const result = await validateUser();
      if (!result) { 
        navigate("/login");
      } 
    })()
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

