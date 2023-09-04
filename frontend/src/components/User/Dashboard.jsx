import { Link } from "react-router-dom"
import {AiFillCaretRight} from "react-icons/ai"

export const Dashboard = (props) => {
    return (
      <>
          <div className="container d-flex justify-content-center " style={{padding:'4rem'}}>
          <div>
            <center>

            <h1 className="h1" style={{fontSize:'3rem'}}>Welcome to Nielit</h1>
            </center>
            <h1 className="h1" style={{fontSize:'4rem'}}>Student Registartion Portal</h1>
            <center>

              <span className='h1'> <Link to={'./courses'} style={{textDecoration: 'none', color: 'green',}}>Click to Continue</Link>  <AiFillCaretRight className='icon mx-0' style={{width:'3rem',height:'2rem',color:'red'}}/> </span>
            </center>
          </div>
        </div>
      </>
    )
  }