import React, { useContext, useEffect, useState } from "react"; 
import { UserContext } from "../../../context-api/UserState";
import { getCourse } from '../../../api';
import { Link } from "react-router-dom";

const category_list = [
  'non_formal',
  'short_term_certificate',
  'it'
]

const Courses = () => {
  const [CATEGORY, setCATEGORY] = useState('')
  const [Courses, setCourses] = useState([])
  const { setSelectedCourse } = useContext(UserContext)

  useEffect(() => {
    if (CATEGORY != '') {
      getCourse({category: CATEGORY})
      .then(({data}) => {
        console.log(data);
        setCourses(data.result)
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [CATEGORY])
  

  const GetCourse = () => { 
    return (
      <>
      <div className="container mt-4">
        <div className="row">
          {Courses.length > 0 && Courses.map((e, i) => {
            return( 
                <div className="col-md-3" key={i}>
                    <div className="card  m-2" >
                        <img src="" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h6 className="card-title"><b>{e.course_name}</b></h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.  <a href="...">read</a></p>
                            <Link to="/dashboard/user/step_one" state={{course_id: e._id, course_name: e.course_name}} className="btn btn-danger" >Apply Now</Link>
                        </div>
                    </div>
                </div> 
            )
          })}
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="m-5">
       <div className="form-inline d-flex justify-content-center align-items-center" >
        <div className="mx-2" >
        <p style={{marginBottom:'0',color:'black'}} className="mandatory">SELECT COURSES CATEGORY</p> 
        </div>
        <div className="mx-2" >
        <select className="form-control" onChange={(e) => setCATEGORY(e.target.value)} >
          <option value={''}>------ Choose One -----</option>
          {
            category_list && category_list.map((e, i) => {
              return (<option key={i} value={e}>{(e.replace('_', ' ')).toUpperCase()}</option>)
            })
          }
        </select>
        </div>
      </div>
      <GetCourse />
    </div>
  );
};

export default Courses;
