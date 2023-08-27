import { Link } from "react-router-dom"

export const Dashboard = (props) => {
    return (
      <>
        <div className="container d-flex justify-content-center">
          <div>
            <h1>Welcome to Nielit</h1>
              <span className='btn btn-outline-primary'> <Link to={'./courses'} style={{textDecoration: 'none', color: 'green'}}>View Courses</Link>  </span>
          </div>
        </div>
      </>
    )
  }