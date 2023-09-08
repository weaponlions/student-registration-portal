import { useEffect, useContext, useState } from "react";
import nielit from "../../assets/images/nielit.png";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context-api/UserState";
import Navbar from "../UI/Navbar";
import Sidebar from "./SidebarAdmin";

export default function AdminTemplate(props) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const context = useContext(UserContext);
  const { Allusers, fetchAllusers } = context;

  let navigate = useNavigate();
  const LogoutBtn = () => {
    localStorage.removeItem("jwtAdmin");
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("jwtAdmin")) {
      // fetchAllusers();
    }
    if (!localStorage.getItem("jwtAdmin")) {
      // return navigate('/');
    }
  });

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
