import  { useEffect,useContext } from 'react'
import { useNavigate, Outlet } from "react-router-dom";
import { UserContext } from '../../context-api/UserState';
import Navbar from '../UI/Navbar';
import Footer from '../UI/Footer';
import "./Items/animation.css"

export default function Structure() {

  const { getUser, userdata, loader } = useContext(UserContext) 
  let navigate= useNavigate();

 
  useEffect(() => {
    const jwtVerify = async () => {
      const result = await getUser()
      console.log(result);
      if (!result) { 
        navigate("/login");
      }
      else{
        // switch (userdata.status) {
        //   case 'NEW':
        //     navigate('/dashboard')
        //     break;
        //   case 'lvl1':
        //     navigate('/dashboard/user/step_two')
        //     break;
        //   case 'lvl2':
        //     navigate('/dashboard/user/step_three')
        //     break;
        //   // case 'lvl3':
        //   //   navigate('/dashboard/user/step_three')
        //   //   break; 
        //   // default:
        //   //   // navigate('/dashboard')
        //   //   break;
        // }
      }
    }
    jwtVerify()
  }, [])
  
  return (
    <>
      <div style={{position: 'relative'}}>
        <Navbar/> 
          <div style={{minHeight: '50vh'}}>
            <Outlet />  
          </div>
        <Footer/> 
      </div>
        
        {
          loader && loader == true && (
            <>
              <div className="loaderPage">
                <div className="contain">
                  <div className="ring"></div>
                  <div className="ring"></div>
                  <div className="ring"></div>
                  <div className="ring"></div>
                  <div className="loading">Loading...</div>
                </div>
              </div> 
            </>
          )
        }
    </>
  )
}

