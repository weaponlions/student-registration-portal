import React, { useState } from "react";
import Field from "../Items/Field";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

export default function Documents({ShowAlert}) {
  const navigate = useNavigate();

  const allFile = (e) => {
    for (let i = 0; i < e.length - 1; i++) {
      if (e[i].files.length == 0)
        return false;
    }
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!allFile(e.target)){
      ShowAlert('Error', 'Please Find Problem!!!!', 'error')
      return;
    }
    let i = 0;
    while (i < e.target.length - 1) {
      const element = e.target[i++]; 
      if (element.files.length == 1) { 
          const result = await uploadFile(element.name, element.files[0]);
          if (!result) {
            ShowAlert('Error', 'Please Find Problem!!!!', 'error')
            break;
          }
      }
    } 
    if(i == e.target.length - 1){
      navigate('/online-payment')
    }

  }

  const uploadFile = async (fieldname, file) => {
    let data = new FormData()
    data.append(fieldname, file)
    data.append('fieldname', fieldname)
    try {
      await axios.post('http://localhost:5000/user/recieve', data)
      return true;
    } catch (err) { 
      console.log(err);
      return false;
    }
  }
 
  return (
    <> 
    <div className="container my-5" style={{border: '15px solid #e7e7e7', borderRadius: '.9rem'}}>
      <div className="row p-2" style={{border: '1px solid #0d6efd', borderRadius: 3}}>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center ">
            <h4>Documents </h4>
          </div> 
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Photo</label>
            <input className="form-control" type="file" id="photo" name="photo" required={"required"} accept="image/*" />
          </div> 
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Aadhar</label>
            <input name={'aadhar'} className="form-control" type={'file'} required={"required"} accept="application/pdf" />
          </div> 
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Signature</label>
            <input className="form-control" type="file" id="sign" name="sign" required={"required"} accept="image/*" />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Left Thumb Print</label>
            <input className="form-control" type="file" id="thumb" name="thumb" required={"required"} accept="image/*" />
          </div>
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
