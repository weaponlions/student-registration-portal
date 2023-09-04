import React, { useContext, useEffect, useState } from "react";
import It from "./Courses/It";
import ShortTerm from "./Courses/ShortTerm";
import Itliteracy from "./Courses/ItLiteracy";
import { UserContext } from "../../context-api/UserState";

const Courses = () => {
  const [CATEGORY, setCATEGORY] = useState('')
  const { setSelectedCourse } = useContext(UserContext)

  useEffect(() => { 
    setSelectedCourse({}) 
  }, [])
  

  const GetCourse = () => {
    switch (CATEGORY) {
      case 'it':
        return <It />
      case 'it_leteracy':
        return <Itliteracy />
      case 'short_term':
        return <ShortTerm /> 
      default:
        break;
    }
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
