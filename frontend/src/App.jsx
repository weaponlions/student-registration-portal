import "./style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/UI/Home";
import Structure from "./components/User/Structure";
import SingnUp from "./components/Auth/SingnUp";
import Login from "./components/Auth/Login";
import About from "./components/UI/About";
import Admin from "./components/Admin/AdminDashboard";
import Documents from "./components/User/Documents";
import Personal from "./components/User/Personal";
import Qualification from "./components/User/Qualification";
import Courses from "./components/User/Courses";
import Table from "./components/User/Table/Table";
import { Dashboard } from "./components/User/Dashboard";
import Payment from "./Payment";
import { useContext, useEffect } from "react";
import { UserContext } from "./context-api/UserState";
import Success from "./Success";
import Swal from 'sweetalert2'; 
import UserProfile from './components/User/profile/UserProfile'; 
import AdminHome from './components/Admin/AdminHome'
import CoursesAdmin from './components/Admin/Courses/CoursesAdmin'
import It from "./components/Admin/Courses/IT";
import Itliteracy from "./components/Admin/Courses/Literacy";
import ShortTerm from "./components/Admin/Courses/ShortTerm";


function App() {
  const { loadUser } = useContext(UserContext)
  useEffect(() => {
    loadUser() 
    return () => {
      loadUser()
    }
  }, []);

  
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
          <Route exact path="/admin" element={<Admin Salert={ShowAlert}/>}>
          <Route exact path="/admin/home" element={<AdminHome />}></Route>
          <Route exact path="/admin/courses" element={<CoursesAdmin />}>
          <Route exact path="/admin/courses/it" element={<It />}></Route>
          <Route exact path="/admin/courses/literacy" element={<Itliteracy />}></Route>
          <Route exact path="/admin/courses/shortterm" element={<ShortTerm />}></Route>

          </Route>

          </Route>
          <Route exact path="/signup" element={<SingnUp Salert={ShowAlert}/>}></Route> 
          <Route exact path="/login" element={<Login Salert={ShowAlert}/>}></Route>

          <Route exact path="/dashboard" element={<Structure Salert={ShowAlert}/>}>
            <Route exact path="/dashboard" element={<Dashboard Salert={ShowAlert}/>}></Route>
            <Route exact path="/dashboard/profile" element={<UserProfile Salert={ShowAlert}/>}></Route>
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
