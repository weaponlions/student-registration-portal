import React from 'react';
import { Link } from 'react-router-dom';

// import CourseImg from '.../assets/images/nielit.png'
export default function It() {
  return (
    <div className="container mt-4">
        <div className="row">
        <div className="col-md-3">
                <div className="card  m-2" >
                    <img src="" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h6 className="card-title"><b>O-Level</b></h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.  <a href="...">read</a></p>
                        <Link to="/dashboard/user/step_one" state={{course_id: '64d4d8b099c1fca34c0139d6'}} className="btn btn-danger"  >Apply Now</Link>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card m-2">
                    <img src="" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h6 className="card-title"><b>A-Level</b></h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.  <a href="...">read</a></p>
                        <a href="#" className="btn btn-danger">Apply Now</a>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card m-2" >
                    <img src="" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h6 className="card-title"><b>B-Level</b></h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.  <a href="...">read</a></p>
                        <a href="#" className="btn btn-danger">Apply Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3 ">
                <div className="card m-2">
                    <img src="" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h6 className="card-title"><b>C-Level</b></h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.  <a href="...">read</a></p>
                        <a href="#" className="btn btn-danger">Apply Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
