import "./style/App.css";
import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context-api/UserState";

//UI folder
import Home from "./components/UI/Home";
import Success from "./components/UI/Success";
import Payment from "./components/UI/Payment";
import About from "./components/UI/About";

// Auth Folder
import Login from "./components/Auth/Login";
import SingnUp from "./components/Auth/SingnUp";

// Admin Folder
import AdminTemplate from "./components/Admin/Template";
import AdminHome from "./components/Admin/component/Home";
import AdminCourses from "./components/Admin/Courses/Courses"; 
import Users from './components/Admin/Courses/Users';

// User Folder 
import Template from "./components/User/Template";
  //  Form
    import Documents from "./components/User/Forms/Documents";
    import Personal from "./components/User/Forms/Personal";
    import Qualification from "./components/User/Forms/Qualification";
  // Course
    import Courses from "./components/User/Courses/Courses";
  // Item
    import Table from "./components/User/Items/Table";
  // component
    import Dashboard from "./components/User/component/Dashboard"; 

//other
  import Swal from 'sweetalert2'; 

function App() {
  const { loadUser } = useContext(UserContext)
  useEffect(() => {
    loadUser()
  }, [])

  
const ShowAlert =(title,text,icon)=>{
  
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
   
  })
}
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/online-payment" element={<Payment Salert={ShowAlert}/>} />
          <Route exact path="/online-payment-success" element={<Success Salert={ShowAlert} />} />
          <Route exact path="/about" element={<About />} />
          
          <Route exact path="/admin" element={<AdminTemplate Salert={ShowAlert}/>} > 
            <Route exact path="/admin" element={<AdminHome Salert={ShowAlert}/>} /> 
            <Route exact path="/admin/courses" element={<AdminCourses />} />
            <Route exact path="/admin/courses/users" element={<Users />} />
          </Route>

          <Route exact path="/signup" element={<SingnUp Salert={ShowAlert}/>} /> 
          <Route exact path="/login" element={<Login Salert={ShowAlert}/>} />

          <Route exact path="/dashboard" element={<Template Salert={ShowAlert}/>}>
            <Route exact path="/dashboard" element={<Dashboard Salert={ShowAlert}/>} />
            {/* <Route exact path="/dashboard/profile" element={<UserProfile Salert={ShowAlert}/>}></Route> */}
            <Route exact path="/dashboard/courses" element={<Courses Salert={ShowAlert}/>} />
            <Route exact path="/dashboard/user/step_one" element={<Personal Salert={ShowAlert} />} />
            <Route exact path="/dashboard/user/step_two" element={<Qualification Salert={ShowAlert}/>} /> 
            <Route exact path="/dashboard/user/step_three" element={<Documents Salert={ShowAlert}/>} />
            <Route exact path="/dashboard/user/preview" element={<Table Salert={ShowAlert}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
