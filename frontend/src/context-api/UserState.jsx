import React from 'react'
import { createContext,useState } from "react";
const UserContext = createContext();


export default  function UserState (props){
    const [userdata, setUserdata] = useState({});
    const [Allusers, setAllusers] = useState([]);


// ----------------------///////////////////// Get user details function /////////////////////////////////----------------------

    const getUser = async()=>{
        const response = await fetch("http://localhost:5000/auth/getuser", {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
              'jwtToken':  localStorage.getItem('jwtToken')
            
           },
  
         });
         const userData = await response.json();
    setUserdata(userData)

         
    }


    ////////////////////////////----------------- Fetch all users state-----------=---/////////////////

    const fetchAllusers = async()=>{
        const response = await fetch("http://localhost:5000/auth/fetchallusers", {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
              'jwtAdmin':  localStorage.getItem('jwtAdmin'),
            
           },
  
         });
         const Allusers = await response.json();
    setAllusers(Allusers);
    // console.log(Allusers);
    }


    // ####---/////////////////------- Update user details -------------////////////////////////////////////
    const updateUser = (val)=>{

    }


    return(
        <UserContext.Provider value={{getUser,userdata,Allusers,setAllusers,fetchAllusers,updateUser}}>
    {props.children}
</UserContext.Provider>
    )
}

 export {UserContext}
