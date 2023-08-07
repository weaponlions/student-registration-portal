
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'

import StudentDashboard from './components/StudentDashboard';
import SingnUp from './components/SingnUp';
import Login from './components/Login';
import About from './components/About';

import Admin from './components/Admin/Admin';


function App() {


  return (
    <>
    <BrowserRouter>

    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/about" element={<About/>}></Route>
    <Route exact path="/admin" element={<Admin/>}></Route>
 

    <Route exact path="/dashboard" element={ <StudentDashboard/>}></Route>

    <Route exact path="/signup" element={ <SingnUp/>}></Route>

    <Route exact path="/login" element={ <Login/>}></Route>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
