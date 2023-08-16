import React from "react";
import { createContext, useState } from "react";
import jwtDecode from "jwt-decode";
const UserContext = createContext();

export default function UserState(props) {
  let user = localStorage.getItem('jwtToken') && jwtDecode(localStorage.getItem('jwtToken')) || {}
  // if (user.name) { 
  //   console.log(user,'this is ')
  //   user = {name: user.name, email: user.email, status: user.status}
  // }
  const [userdata, setUserdata] = useState(user);
  const [Allusers, setAllusers] = useState([]);

  // ----------------------///////////////////// Get user details function /////////////////////////////////----------------------

  const getUser = async () => {
    const response = await fetch("http://localhost:5000/auth/getuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        jwtToken: localStorage.getItem("jwtToken"),
      },
    });
    const { result } = await response.json(); 
    if (result == false) {
      localStorage.removeItem('jwtToken')
    }
    return result;
  };

  ////////////////////////////----------------- Fetch all users state-----------=---/////////////////

  const fetchAllusers = async () => {
    const response = await fetch("http://localhost:5000/auth/fetchallusers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        jwtAdmin: localStorage.getItem("jwtAdmin"),
      },
    });
    const Allusers = await response.json();
    setAllusers(Allusers);
    // console.log(Allusers);
  };

  // ####---/////////////////------- Update user details -------------////////////////////////////////////
  const updateUser = (val) => {};

  return (
    <UserContext.Provider
      value={{
        getUser,
        userdata,
        setUserdata,
        Allusers,
        setAllusers,
        fetchAllusers,
        updateUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext };
