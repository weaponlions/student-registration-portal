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
import Admin from "./components/Admin/Admin";

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


function App() {
  const { loadUser } = useContext(UserContext)
  useEffect(() => {
    loadUser()
  }, [])
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/online-payment" element={<Payment />}></Route>
          <Route exact path="/online-payment-success" element={<Success />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/signup" element={<SingnUp />}></Route> 
          <Route exact path="/login" element={<Login />}></Route>

          <Route exact path="/dashboard" element={<Template />}>
            <Route exact path="/dashboard" element={<Dashboard />}></Route>
            <Route exact path="/dashboard/courses" element={<Courses />}></Route>
            <Route exact path="/dashboard/user/step_one" element={<Personal />}></Route>
            <Route exact path="/dashboard/user/step_two" element={<Qualification />}></Route> 
            <Route exact path="/dashboard/user/step_three" element={<Documents />}></Route>
            <Route exact path="/dashboard/user/preview" element={<Table />}></Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
