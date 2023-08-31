import { createContext, useState } from "react";
import jwtDecode from "jwt-decode"; 

const UserContext = createContext();

export default function UserState(props) {
  const [userdata, setUserdata] = useState({});
  
  const func = async () => {
    const user = await localStorage.getItem('jwtToken') && jwtDecode(localStorage.getItem('jwtToken')) || {}
    setUserdata({name: user.name, email: user.email, status: user.status});
  }
  func()

  const [loader, setLoader] = useState(false)

  const personalData = {
    userData: {course_id: '', name: 'Harsh Saini', father: 'Naresh Saini', mother: 'Pushpa Saini', gender: 'M', dob: '2003-08-13', marital: 'SINGLE', category: 'OBC', pwd: 'NO', ews: 'NO', religion: 'Hinduism', mobile: '8433480253', whatsapp: '8433480253' },
    userAdrs1: {full_address: 'Mohammadpur Kunhari', state: 'UK', city: 'Haridwar', district: 'Haridwar', pincode: '247663'},
    userAdrs2: {full_address: 'Mohammadpur Kunhari', state: 'UK', city: 'Haridwar', district: 'Haridwar', pincode: '247663'}
  }
  const [formOne, setFormOne] = useState(personalData)
  
  const [formTwo, setFormTwo] = useState({})
  
  // ----------------------///////////////////// Get user details function /////////////////////////////////----------------------

  const getUser = async () => { 
    try { 
      let token = localStorage.getItem('jwtToken') || undefined; 
      if (!token) {
        localStorage.removeItem('jwtToken')
        throw Error("Token Not Found")
      }
      const { exp } = jwtDecode(token);
      if (exp < (Math.round(Date.now()/1000)) ) {
        throw Error("Token Expire")
      }
      return true;
    } catch (err) {
      console.log(err.message);
      return false;
    } 
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
