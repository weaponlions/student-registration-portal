import  { useEffect,useContext } from 'react'
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from '../../context-api/UserState';
import Navbar from '../UI/Navbar';
import Footer from '../UI/Footer';
import "./Items/animation.css";
import { initialize_StepOne, userInfo } from './../../api/index';

export default function Structure() {

  const { getUser, userdata, loader, setFormOne } = useContext(UserContext) 
  const navigate = useNavigate(); 
  const location = useLocation();

  useEffect(() => {
    const jwtVerify = async () => {
      const result = await getUser();
      if (!result) { 
        navigate("/login");
      } 
    }
    jwtVerify()
  }, [location])

  // useEffect(() => { 
  //   if (location.state && location.state.course_id) {
  //     initialize_StepOne({})
  //       .then(({data}) => { 
  //         if (data.error == 'exist') {
  //           userInfo().then(({data}) => {
  //             const { result } = data;
  //             const correspond = result[0].correspond
  //             const permanent = result[0].permanent
  //             delete result[0].correspond
  //             delete result[0].permanent
  //             setFormOne({userAdrs1: permanent, userAdrs2: correspond, userData: result[0]});
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           })
  //         }
  //       })
  //       .catch ((err) => {
  //         console.log(err.message); 
  //       })
  //   }
  // }, [])
  
  
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

