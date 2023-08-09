import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/UI/Home";
import StudentDashboard from "./components/User/StudentDashboard";
import SingnUp from "./components/Auth/SingnUp";
import Login from "./components/Auth/Login";
import About from "./components/UI/About";
import Admin from "./components/Admin/Admin";
import Documents from "./components/User/Documents";
import Personal from "./components/User/Personal";
import Qualification from "./components/User/Qualification";
import Courses from "./components/User/Courses";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/signup" element={<SingnUp />}></Route> 
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/dashboard" element={<StudentDashboard />}>
            <Route exact path="/dashboard/courses" element={<Courses />}></Route>
            <Route exact path="/dashboard/step1" element={<Personal />}></Route>
            <Route exact path="/dashboard/step2" element={<Qualification />}></Route> 
            <Route exact path="/dashboard/step3" element={<Documents />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
