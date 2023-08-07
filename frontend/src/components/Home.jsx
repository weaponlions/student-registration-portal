

import img1 from '../assets/images/image1.jpg'
import img2 from '../assets/images/image2.jpg'
import img4 from '../assets/images/image4.jpg'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'


export default function Home() {
  return (
<>
    <Header/>
  <Navbar/>
 <main>
 <div className='my-1'>
          <div id="carouselExampleInterval" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={img1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={img2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>

    </main>
    <Footer/>
    </>

  )
}
