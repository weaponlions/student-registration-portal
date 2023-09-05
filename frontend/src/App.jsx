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
import Admin from "./components/Admin/AdminDashboard";

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
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/online-payment" element={<Payment Salert={ShowAlert}/>}></Route>
          <Route exact path="/online-payment-success" element={<Success Salert={ShowAlert} />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          {/* <Route exact path="/admin" element={<Admin Salert={ShowAlert}/>} /> */}
          {/* <Route exact path="/admin/home" element={<AdminHome />}></Route>
          <Route exact path="/admin/courses" element={<CoursesAdmin />} />
          <Route exact path="/admin/courses/it" element={<It />}></Route>
          <Route exact path="/admin/courses/literacy" element={<Itliteracy />}></Route>
          <Route exact path="/admin/courses/shortterm" element={<ShortTerm />}></Route> */}
          <Route exact path="/signup" element={<SingnUp Salert={ShowAlert}/>}></Route> 
          <Route exact path="/login" element={<Login Salert={ShowAlert}/>}></Route>

          <Route exact path="/dashboard" element={<Template Salert={ShowAlert}/>}>
            <Route exact path="/dashboard" element={<Dashboard Salert={ShowAlert}/>}></Route>
            {/* <Route exact path="/dashboard/profile" element={<UserProfile Salert={ShowAlert}/>}></Route> */}
            <Route exact path="/dashboard/courses" element={<Courses Salert={ShowAlert}/>}></Route>
            <Route exact path="/dashboard/user/step_one" element={<Personal Salert={ShowAlert} />}></Route>
            <Route exact path="/dashboard/user/step_two" element={<Qualification Salert={ShowAlert}/>}></Route> 
            <Route exact path="/dashboard/user/step_three" element={<Documents Salert={ShowAlert}/>}></Route>
            <Route exact path="/dashboard/user/preview" element={<Table Salert={ShowAlert}/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
