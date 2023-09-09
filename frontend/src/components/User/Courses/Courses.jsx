import React, { useContext, useEffect, useState } from "react"; 
import { UserContext } from "../../../context-api/UserState";
import { Link } from "react-router-dom";
import { getCourses, getCategories } from "../../../api";

const Courses = () => {
  const [CATEGORY, setCATEGORY] = useState('') 

  const [list, setList] = useState([])

  useEffect(() => { 
    (async () => {
      const { data } = await getCategories();
      console.log(data);
    })()
  }, [])
  

  useEffect(() => { 
    if (CATEGORY != '') {
      (async () => {
        const { data } = await getCourses({category: CATEGORY});
        console.log(data);
      })()
    }
  }, [CATEGORY])
  

  const GetCourse = () => {
    return ( 
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
                <div className="card  m-2" >
                    <img src="" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h6 className="card-title"><b>O-Level</b></h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.  <a href="...">read</a></p>
                        <Link to="/dashboard/user/step_one" state={{course_id: '64d72841ebf4639cf749b2fb', course_name: 'O-Level'}} className="btn btn-danger" >Apply Now</Link>
                    </div>
                </div>
          </div> 
        </div>
      </div> 
    )
  }

  return (
    <div className="m-5">
       <div className="form-inline d-flex justify-content-center align-items-center" >
        <div className="mx-2  " >
        <p style={{marginBottom:'0',color:'black'}} className="mandatory">SELECT COURSES CATEGORY</p> 
        </div>
        <div className="mx-2 " >
        <select className="form-control " onChange={(e) => setCATEGORY(e.target.value)} >
          <option value={''}>------ Choose One -----</option>
          <option value={'it'}>IT COURSES</option>
          <option value={'it_leteracy'}>IT LITERACY COURSES</option>
          <option value={'short_term'}>SHORT TERM COURSES</option> 
        </select>
        </div>
      
    
      </div>

      <GetCourse />
    </div>
  );
};

export default Courses;
