import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import {FaHistory} from "react-icons/fa"
 import {BiUser} from "react-icons/bi"
import { useNavigate, Outlet,Link } from "react-router-dom";

import nielit from '../../assets/images/nielit.png'

 
function Sidebar({openSidebarToggle, OpenSidebar,history}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        {/* <Scrollbar style={{ width: 250, height: 250 }}> */}
        <div className='sidebar-title'>
            <div className='sidebar-brand text-light'>
            <figure>
                <img src={nielit} alt="nielit" style={{width:'10rem'}} />
            </figure>
            </div>
            {/* <span className='icon close_icon bg-danger' onClick={OpenSidebar}>dsfdsfX</span> */}
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
        <Link  to="/dashboard/courses" style={{textDecoration:'none',color:'white'}}>
             
                    <BsGrid1X2Fill className='icon' onClick={(e)=>{return e.preventDefault()}}/>
                   Dashboard
                
            </Link> 
            </li>
            <li className='sidebar-list-item'>
            <Link to="/dashboard/profile" style={{textDecoration:'none',color:'white'}}>
                
                    <BiUser className='icon' onClick={(e)=>{return e.preventDefault()}}/> Profile
                
                </Link>
            </li>
            {/* <li className='sidebar-list-item'>
            <Link to="/dashboard/history" style={{textDecoration:'none',color:'white'}}>
                
                    <FaHistory className='icon' onClick={(e)=>{return e.preventDefault()}}/> History
                
                </Link>
            </li> */}
            
        </ul>

    </aside>
  )
}

export default Sidebar