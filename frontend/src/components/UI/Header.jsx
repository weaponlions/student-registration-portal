import React from 'react'
// import 'dotenv/config'
import logo1 from './../../assets/images/nielit.png'
import lions from './../../assets/images/emblem33.png'
import bcg from './../../assets/images/headerbackground.jpg'



export default function Header() {
  return (
  <header>
    
     {/* <div className='conatiner-fluid d-flex header pt-2'>

<div className="logo1-nav"><img src={logo1} alt="loading" /></div>
<div className="heading-nav mx-1 text-light" >
    <h2>National Institute of Electronics and Information Technology, Haridwar</h2>
    <p>An Autonomous Scientific Society of Ministry of Electronics &
			Information Technology , Government of India</p>
</div>
<div className="logo2-nav">
    <img src={lions} alt="loading" />
</div>

    </div> */}

<div style={{ backgroundImage:`url(${bcg})`,
}}>
        
		<table className="container-fluid" >
			<tr>
				<td  className='m-0 p-0'  >
          <img className="img-fluid" src={logo1} /></td>


				<td className='d-flex  flex-column justify-content-center align-items-center' >
          <h1 style={{letterSpacing:'2rem', fontWeight:'400'}} >NIELIT</h1>
          
	 <h1 style={{fontSize:'2.2vw'}}> National Institute of Electronics and Information Technology, Haridwar</h1>

			<p style={{fontSize:'1.2vw' ,}}>An Autonomous Scientific Society of Ministry of Electronics &
    Information Technology (MeitY), Government of India</p>
  
				</td>


				<td style={{}}><img className="img-fluid" style={{width:'6rem'}} src={lions}/></td>

			</tr>
		</table>
	</div>

    </header>

  )
}


{/* <center><p style={{fontSize: '3rem', letterSpacing:'20px'}}>NIELIT</p> </center> */}

//  <center> 
//   <strong style={{fontSize:'2.1vw'}}>
    
//     National Institute of Electronics and Information Technology, Haridwar</strong>
//   <br/>
//   <em style={{fontSize:'1.2vw' ,}}>An Autonomous Scientific Society of Ministry of Electronics &
//     Information Technology (MeitY), Government of India</em>
// </center> 