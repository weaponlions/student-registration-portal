import React from "react";
import Field from "./Items/Field";
import { useNavigate } from "react-router-dom";

export default function Documents() {
  const navigate = useNavigate()

  const handleFile = (e) => {
    navigate(-1)
    let ele = e.target
    if (ele.files && ele.files[0]) {   
      let file = ele.files[0]
       
    }
  }
 
 
  return (
    <> 
    <div className="container my-5" style={{border: '20px solid #e7e7e7', borderRadius: 5}}>
      <div className="row p-2" style={{border: '1px solid #0d6efd', borderRadius: 2}}>
        <form className="row g-3">
          <div className="d-flex justify-content-center ">
            <h4>Documents </h4>
          </div> 
          <Field label={'Photo'} value={''} handleChange={handleFile} type={'file'} />
          <Field label={'Aadhar'} value={''} handleChange={() => {}} type={'file'} />
          <Field label={'Signature'} value={''} handleChange={() => {}} type={'file'} />
          <Field label={'Left Thumb Print'} value={''} handleChange={() => {}} type={'file'} />
          <div className="col-12 d-flex justify-content-center">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
