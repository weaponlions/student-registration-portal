import React from 'react'
import fb from '../assets/images/social-logo/fb.png'
import tw from '../assets/images/social-logo/tw.png'
import yt from '../assets/images/social-logo/yt.png'

export default function Footer() {
  return (
  
    <footer className='bg-secondary'>
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
      
  )
}



{/* <footer class="u-clearfix u-footer u-grey-80" id="sec-32fc"><div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-align-left u-social-icons u-spacing-6 u-social-icons-1">
          <a class="u-social-url" title="facebook" target="_blank" href="https://www.facebook.com/NIELITIndia"><span class="u-icon u-social-facebook u-social-icon u-icon-1"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-da76"></use></svg><svg class="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-da76"><circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
            c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"></path></svg></span>
          </a>
          <a class="u-social-url" title="twitter" target="_blank" href="https://twitter.com/NIELITIndia"><span class="u-icon u-social-icon u-social-twitter u-icon-2"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-1df7"></use></svg><svg class="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-1df7"><circle fill="currentColor" class="st0" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
            c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
            c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
            c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
            c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"></path></svg></span>
          </a>
          <a class="u-social-url" title="youtube" target="_blank" href="https://www.youtube.com/c/NIELITIndia"><span class="u-icon u-social-icon u-social-youtube u-icon-3"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-6ec2"></use></svg><svg class="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-6ec2"><circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M74.9,33.3H37.3c-7.4,0-13.4,6-13.4,13.4v18.8c0,7.4,6,13.4,13.4,13.4h37.6c7.4,0,13.4-6,13.4-13.4V46.7 C88.3,39.3,82.3,33.3,74.9,33.3L74.9,33.3z M65.9,57l-17.6,8.4c-0.5,0.2-1-0.1-1-0.6V47.5c0-0.5,0.6-0.9,1-0.6l17.6,8.9 C66.4,56,66.4,56.8,65.9,57L65.9,57z"></path></svg></span>
          </a>
        </div>
        <div class="u-border-1 u-border-white u-expanded-width u-line u-line-horizontal u-opacity u-opacity-50 u-line-1"></div>
        <p class="u-align-center u-text u-text-1"> राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान&nbsp;<br>National Institute of Electronics &amp; Information Technology(NIELIT)&nbsp;<br>NIELIT Bhawan,Plot No. 3, PSP Pocket, Sector-8,
Dwarka, New Delhi-110077,&nbsp;<br>Phone:- 91-11-2530 8300
Call Centre No.:- 011-25308303, Email:- contact[at]nielit[dot]gov[dot]in
        </p>
      </div>
	  <div align="center"><img src="https://counter9.stat.ovh/private/freecounterstat.php?c=sjsem54rl6g2w8987hfajh3kl91gzx8m" border="0" title="page counter" alt="page counter">
      </div>
	  </footer> */}