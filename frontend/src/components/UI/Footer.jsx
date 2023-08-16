import React from 'react'
import fb from './../../assets/images/social-logo/fb.png'
import tw from './../../assets/images/social-logo/tw.png'
import yt from './../../assets/images/social-logo/yt.png'
import bgImg from '../../assets/images/world_pattern.svg'


export default function Footer() {
  return (

    //     <footer className='bg-secondary'>
    //         <div className="logo d-flex justify-content-center p-2 bg-danger">
    //             <div className="fb">
    // <img src={fb} alt="" className='logoSize' />
    //             </div>
    //             <div className="twitter  mx-2">
    //             <img src={yt} className='logoSize' alt="" />
    //                 </div>
    //                 <div className="youtube">
    //                 <img src={tw} alt=""  className='logoSize'/>
    //                 </div>

    //         </div>
    //         <div className="line d-flex justify-content-center b">

    //         <hr className='w-50'/>
    //         </div>

    //         <div className="headings ">
    //             <h6 className=''>राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान </h6>
    //         <h6>National Institute of Electronics & Information Technology(NIELIT) </h6>
    //         <h6>NIELIT Bhawan,Plot No. 3, PSP Pocket, Sector-8, Dwarka, New Delhi-110077, </h6>
    //         <h6>Phone:- 91-11-2530 8300 Call Centre No.:- 011-25308303, Email:- contact[at]nielit[dot]gov[dot]in</h6>
    //         <h5>Copyright © NIELIT. All Rights Reserved.</h5>
    //         </div>
    //     </footer>

    <footer className=" footer" style={{backgroundImage: `url(${bgImg})` , backgroundColor: '#2D2B3A', width: '100%'}}>
      <div className="container-fluid" style={{marginTop: '0', paddingTop: "0"}}>
        <div className="row">
          <div className="col-lg-5" style={{marginLeft: 0, marginRight: 'auto'}}>
            <h3 className='text-light'>NIELIT Haridwar</h3>
            <p style={{textAlign: 'justifyContent', color:'white'}}>2nd Floor, Government Polytechnic Building, Plot No-6C, Sector-11, Near Pentagon Mall, SIDCUL, Haridwar, Uttarakhand-249403.</p>
          </div>

          <div className="col-lg-6" style={{marginRight: '0', marginLeft: 'auto'}}>
            <p className="text-end text-muted text-warning" style={{paddingRight: '20px'}}>For more updates follow us on</p>
            <ul className="d-flex justify-content-end pb-3 mb-3 list-unstyled  ">
              <li className="ms-3 ">
                <a  href="#">
               <img src={yt} style={{width:'3rem'}} alt="youtube" />
                </a>
              </li>

              <li className="ms-3 ">
                <a  href="#">
               <img src={fb} style={{width:'3rem'}} alt="youtube" />
                </a>
              </li>

              <li className="ms-3 ">
                <a  href="#">
               <img src={tw} style={{width:'3rem'}} alt="youtube" />
                </a>
              </li>
           
           
            </ul>
          </div>
        </div>

        <p className="text-center text-danger  border-top p-0 m-0" id="copyright">Copyright &copy; 2022, all rights reserved. This website design and develop by <a href="https://nielit.gov.in/haridwar/" target="_blank">NIELIT Haridwar</a></p>
      </div>
    </footer>

  )
}


