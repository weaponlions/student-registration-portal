import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Success = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { order_id } = {...location.state}

    useEffect(() => {
       if (!order_id) {
        navigate('/dashboard');
       }
    }, [])
    
  return (
    <div>
      <div className="container" style="margin-top:5%;">
	<div className="row">
        <div className="jumbotron" style="box-shadow: 2px 2px 4px #000000;">
            <h2 className="text-center">YOUR ORDER HAS BEEN RECEIVED</h2>
          <h3 className="text-center">Thank you for your payment, it’s processing</h3>
          
          <p className="text-center">Your order Id is: 100000023</p>
          <p className="text-center">You will receive an order confirmation email with details of your order and a link to track your process.</p>
            <center><div className="btn-group" style="margin-top:50px;">
                <Link href="#" className="btn btn-lg btn-warning">CONTINUE</Link>
            </div></center>
        </div>
	</div>
</div>
    </div>
  )
}

export default Success
