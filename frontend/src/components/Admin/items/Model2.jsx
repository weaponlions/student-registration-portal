import { React ,useEffect} from "react";
import { Link, useLocation , useNavigate} from "react-router-dom";
import { createBatch } from "../../../api";
import { useState } from "react";


function Model2({Salert}) {

  const location = useLocation();
  const navigate = useNavigate();
  // useEffect(() => {
  //   (async()=>{   
  //     const { course_name, course_id } = await { ...location.state };
     
  //     console.log(location);
    
  // })()
  // }, [])
  
  const { course_name, course_id } =  { ...location.state };
  const [credientials, setCredientials] = useState({
    course_id: course_id || "",
    batch_name: "",
    start_date: "",
    end_date: "",
    fees: "",
  });
  const onchangeButton = (e) => {
    setCredientials({ ...credientials, [e.target.name]: e.target.value });
    console.log(credientials);
  };
  const subbmit = async(e) => {
    
    e.preventDefault();
    console.log(credientials);
    const {data} = await createBatch(credientials);
    if(data){
console.log(data.status);
      Salert.success(data.status);
          navigate('/admin/batches');


    }
    // createBatch(credientials)
    //   .then((e) => {
    //     return console.log("done", e);
    //     Salert.success(e);
    //   })
    //   .catch((err) => {
    //     return console.log("fail", err);
    //   });

    // console.log(credientials);
    // console.log({ [e.target.name]: e.target.value });
  };
  return (
    <>
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={subbmit}>
      <div className="mb-3">
        <label htmlFor="course_id" className="form-label ">
          course_id
        </label>
        <input
          type="text"
          className="form-control"
          id="course_id"
          name="course_id"
          aria-describedby="emailHelp"
          onChange={onchangeButton}
          value={course_id}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="batch_name" className="form-label">
          batch_name
        </label>
        <input
          type="text"
          className="form-control"
          id="batch_name"
          name="batch_name"
          onChange={onchangeButton}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="end_date" className="form-label">
          end_date
        </label>
        <input
          type="date"
          className="form-control"
          id="end_date"
          name="end_date"
          onChange={onchangeButton}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="start_date" className="form-label">
          start_date
        </label>
        <input
          type="date"
          className="form-control"
          id="start_date"
          name="start_date"
          onChange={onchangeButton}
        />
      </div>

    {/* <button type="submit">summit</button> */}
    <div className="modal-footer">
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
      
      </div>
    </form>
      </div>
    
    </div>
  </div>
</div>
  </>
  )
}

export default Model2