import React from 'react'
import fb from './../../assets/images/social-logo/fb.png'
import tw from './../../assets/images/social-logo/tw.png'
import yt from './../../assets/images/social-logo/yt.png'

export default function Footer() {
  return (
  <div style={{bottom:'0' ,width:'100%' }}>
    <footer className='bg-secondary ' >
        <div className="logo d-flex justify-content-center p-2 bg-danger">
            <div className="fb">
<img src={fb} alt="" className='logoSize' />
            </div>
            <div className="twitter  mx-2">
            <img src={yt} className='logoSize' alt="" />
                </div>
                <div className="youtube">
                <img src={tw} alt=""  className='logoSize'/>
                </div>
               
        </div>
        <div className="line d-flex justify-content-center b">

        <hr className='w-50'/>
        </div>

        <div className="headings ">
            <h6 className=''>राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान </h6>
        <h6>National Institute of Electronics & Information Technology(NIELIT) </h6>
        <h6>NIELIT Bhawan,Plot No. 3, PSP Pocket, Sector-8, Dwarka, New Delhi-110077, </h6>
        <h6>Phone:- 91-11-2530 8300 Call Centre No.:- 011-25308303, Email:- contact[at]nielit[dot]gov[dot]in</h6>
        <h5>Copyright © NIELIT. All Rights Reserved.</h5>
        </div>
    </footer>
    </div>
  )
}


