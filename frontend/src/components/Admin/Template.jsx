import { useEffect, useContext, useState } from "react";
import nielit from "../../assets/images/nielit.png";
import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../context-api/UserState";
import Navbar from "../UI/Navbar";
import Sidebar from "./items/Sidebar";

export default function AdminTemplate(props) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  let navigate = useNavigate(); 
  let location = useLocation();
  const { getSetUserData, validateUser } = useContext(UserContext);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  
 
  // useEffect(() => {
  //   (async () => {
  //     const result = await validateUser();
  //     if (!result) { 
  //       navigate("/login");
  //     } 
  //   })()
  //   console.log(getSetUserData());
  // }, [location])

  return (
    <>
      <div className={!openSidebarToggle ? "grid-container" : "sidebar_hide"}>
        <Navbar hamicon={true} OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
          history={props.history}
        />
        <div className="main-container container">
          <Outlet />
        </div>
      </div>
    </>
  );
}
