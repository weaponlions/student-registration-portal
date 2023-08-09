import React from 'react'

import logo1 from './../../assets/images/nielit.png'
import emblem33 from './../../assets/images/emblem33.png'



export default function Header() {
  return (
  <header>
    
     <div className='conatiner-fluid d-flex header pt-2'>

<div className="logo1-nav"><img src={logo1} alt="loading" /></div>
<div className="heading-nav mx-1 text-light" >
    <h2>National Institute of Electronics and Information Technology, Haridwar</h2>
    <p>An Autonomous Scientific Society of Ministry of Electronics &
			Information Technology , Government of India</p>
</div>
<div className="logo2-nav">
    <img src={emblem33} alt="loading" />
</div>

    </div>

    </header>

  )
}
