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
  const [loader, setLoader] = useState(false)

  const personalData = {
    userData: {course_id: '', name: 'Harsh Saini', father: 'Naresh Saini', mother: 'Pushpa Saini', gender: 'M', dob: '08/13/2003', marital: 'SINGLE', category: 'OBC', pwd: 'NO', ews: 'NO', religion: 'Hinduism', mobile: '8433480253', whatsapp: '8433480253' },
    userAdrs1: {full_address: 'Mohammadpur Kunhari', state: 'UK', city: 'Haridwar', district: 'Haridwar', pincode: '247663'},
    userAdrs2: {full_address: 'Mohammadpur Kunhari', state: 'UK', city: 'Haridwar', district: 'Haridwar', pincode: '247663'}
  }
  const [formOne, setFormOne] = useState(personalData)
  // const [formOne, setFormOne] = useState(null)
  const [formTwo, setFormTwo] = useState({})
  
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
        getUser, userdata, setUserdata, setFormOne,
        formOne, loader, setLoader, formTwo, setFormTwo
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext };
