import  { useEffect,useContext } from 'react'
import { useNavigate, Outlet } from "react-router-dom";
import { UserContext } from '../../context-api/UserState';
import Navbar from '../UI/Navbar';
import Footer from '../UI/Footer';

export default function StudentDashboard() {

  const context = useContext(UserContext)
  const { getUser, userdata } = context;
  let navigate= useNavigate();
 
  useEffect(() => {
    const jwtVerify = async () => {
      const result = await getUser()
      if (!result) { 
        navigate("/login");
      }
      else{
        switch (userdata.status) {
          case 'NEW':
            navigate('/dashboard/courses')
            break;
          case 'lvl1':
            navigate('/dashboard/user/step_one')
            break;
          case 'lvl2':
            navigate('/dashboard/user/step_two')
            break;
          case 'lvl3':
            navigate('/dashboard/user/step_three')
            break;
          default:
            break;
        }
      }
    }
    jwtVerify()
  }, [])
  
  return (
<>
<Navbar/> 
  <Outlet /> 
<Footer/> 
</>
  )
}

