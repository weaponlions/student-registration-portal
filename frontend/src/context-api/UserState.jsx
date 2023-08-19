import React from "react";
import { createContext, useState } from "react";
import jwtDecode from "jwt-decode";
import { verifyUser } from "../api";

const UserContext = createContext();

export default function UserState(props) {
  let user = localStorage.getItem('jwtToken') && jwtDecode(localStorage.getItem('jwtToken')) || {}
  if (user.name) { 
    user = {name: user.name, email: user.email, status: user.status}
  }
  const [userdata, setUserdata] = useState(user); 

  // ----------------------///////////////////// Get user details function /////////////////////////////////----------------------

  const getUser = async () => { 
    const { data } = await verifyUser()
    const { result } = data;  
    if (result == false) {
      localStorage.removeItem('jwtToken')
    }
    return result;
  };
  
  return (
    <UserContext.Provider
      value={{
        getUser,
        userdata,
        setUserdata, 
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext };
