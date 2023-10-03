import React, { useEffect,useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context-api/UserState';
import { createBatch, enrollBatch } from '../../api';
import jwtDecode from 'jwt-decode';


const Success = () => {
  const {  selectedCourse } = useContext(UserContext)

    const location = useLocation()
    const navigate = useNavigate()
    const { order_id,category} = {...location.state}
    const { course_name, course_id } = {...selectedCourse};
const tokenn = localStorage.getItem('jwtToken');
const {user_id} = jwtDecode(tokenn);
// const present =Date.now() 
// const end = '2023-12-23'
    useEffect(() => {
      // console.log(order_id,course_name, course_id,'successlog');
      // createBatch({course_id:course_id,batch_name:course_name,start_date:present,end_date:end,fees:'2300'}).then((e)=>{return console.log('done create batch',e)}).catch((e)=>{return console.log(e)})

      enrollBatch({user_id:user_id,course_id:course_id}).then((e)=>{return console.log('done enroll batch',e)}).catch((err)=>{return console.log('faied batch add',err)})
      
       if (!order_id) {
         Salert.error('order id not found');
        // navigate('/Fresult');
       }
    }, []);
    
  return (
    <div>
      <div className="container" style={{"marginTop":"5%"}}>
	      <div className="row"> 
          <div className="jumbotron" style={{"boxShadow": "2px 2px 4px #000000"}}>
              <h2 className="text-center">YOUR ORDER HAS BEEN RECEIVED</h2>
            <h3 className="text-center">Thank you for your payment, it’s processing</h3>
            
            <p className="text-center">Your order Id is: 100000023</p>
            <p className="text-center">You will receive an order confirmation email with details of your order and a link to track your process.</p>
              <center><div className="btn-group" style={{"marginTop": "50px"}}>
                  <Link href="#" className="btn btn-lg btn-warning" to="/Fresult">CONTINUE</Link>
              </div></center>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success
