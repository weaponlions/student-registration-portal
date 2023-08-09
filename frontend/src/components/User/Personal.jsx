import React from 'react'

export default function Personal() {
  return (
    <div className='container'>
<form className="row g-3">


 {/* -----------/////////////////////// Course Name ///////////////////////////////---------------------------- */}
 <div className="col-md-4">
    <label htmlFor="validationDefault18" className="form-label mandatory">Course Name</label>
    <input type="text" className="form-control" id="validationDefault18"  required/>
  </div>


  {/* -----------/////////////////////// Name ///////////////////////////////---------------------------- */}
  <div className="col-md-4">
    <label htmlFor="validationDefault01" className="form-label mandatory">Applicant's full name</label>
    <input type="text" className="form-control" id="validationDefault01"  required/>
  </div>

  {/* ------------------------//////////////////// father Name ////////////////////////////----------------------- */}
  <div className="col-md-4">
    <label htmlFor="validationDefault02" className="form-label mandatory">Father Name</label>
    <input type="text" className="form-control" id="validationDefault02" required/>
  </div>


{/* -----------------------/////////////////////// Mother name //////////////////---------------------- */}
<div className="col-md-4">
    <label htmlFor="validationDefault03" className="form-label mandatory">Mother Name </label>
    <input type="text" className="form-control" id="validationDefault03" required/>
  </div>

  {/* ----------------------- ///////////////// gender ///////////////////////////-------------------------- */}

  <div className="col-md-4">
    <label htmlFor="validationDefault04" className="form-label mandatory">Gender</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>Male</option>
      <option>Female</option>
      <option>Transgender</option>
    </select>
  </div>

{/* ------------------//////////////////////// DOB /////////////////=------------------------ */}
<div className="col-md-4">
    <label htmlFor="validationDefault05" className="form-label mandatory">DOB </label>
    <input type="date" className="form-control" id="validationDefault05" required/>
  </div>


 {/* ------------/////////////////////////// email ///////////////-------------------- */}

 <div className="col-md-4">
    <label htmlFor="validationDefault12" className="form-label mandatory">Email Address </label>
    <input type="email"   className="form-control" id="validationDefault12" required/>
  </div>

  
{/* --------------------/////////////////////// Marital Status /////////////////--------------------- */}
<div className="col-md-4">
    <label htmlFor="validationDefault06" className="form-label mandatory">Marital Status</label>
    <select className="form-select" id="validationDefault06" required>
      <option selected disabled value="">Choose...</option>
      <option>Single</option>
      <option>Married</option>
      <option>Divorced</option>
      <option>Widowed</option>
    </select>
  </div>

{/* --------------------/////////////////////// Category  /////////////////--------------------- */}
<div className="col-md-4">
    <label htmlFor="validationDefault07" className="form-label mandatory">Category</label>
    <select className="form-select" id="validationDefault07" required>
      <option selected disabled value="">Choose...</option>
      <option>General</option>
      <option>Schedule Caste</option>
      <option>Schedule Tribe</option>
      <option>Other Backward classes</option>
    </select>
  </div>

{/* --------------------/////////////////////// handicapped  /////////////////--------------------- */}

  <div className="col-md-4">
    <label htmlFor="validationDefault08" className="form-label mandatory">Handicapped</label>
    <select className="form-select" id="validationDefault8" required>
      <option selected disabled value="">Choose...</option>
      <option>Yes</option>
      <option>No</option>
     
    </select>
  </div>

{/* --------------------/////////////////////// Religion  /////////////////--------------------- */}


                               
<div className="col-md-4">
    <label htmlFor="validationDefault09" className="form-label mandatory">Religion</label>
    <select name="religion"  className='form-select' id="validationDefault09" required>
    <option selected disabled value="">Choose...</option>

                                    <option value="hindu">Hinduism</option>
                                    <option value="christian">Christianity</option>
                                    <option value="islam">Islam</option>
                                    <option value="sikh">Jainism</option>
                                    <option value="sikh"> Sikhism</option>
                                    <option value="sikh">Buddhism</option>
                                    
  </select>
 
  </div>


{/* ---------------------////////////////  Personal Phone No. /////////////////------------------- */}

  <div className="col-md-4">
    <label htmlFor="validationDefault10" className="form-label mandatory">Personal Phone No. </label>
    <input type="text"   placeholder='Number' maxLength="10" className="form-control" id="validationDefault10" required/>
  </div>
  
  {/* ------------/////////////////////////// Parent Phone No. ///////////////-------------------- */}

  <div className="col-md-4">
    <label htmlFor="validationDefault11" className="form-label mandatory">Parent Phone No. </label>
    <input type="text"   placeholder='Number' maxLength="10"  className={`form-control `} id="validationDefault11" required/>
    {/* <div className="invalid-feedback">
          Please enter a number
        </div> */}
  </div>

 

  {/* ------------/////////////////////////// Permanent Address ///////////////-------------------- */}

  <div className="col-md-12">
    <label htmlFor="validationDefault13" className="form-label mandatory"> Permanent Address </label>
    <textarea   className="form-control" id="validationDefault13" cols="9" rows="2"></textarea>
  
  </div>


 {/* ------------/////////////////////////// Correspond Address ///////////////-------------------- */}

 <div className="col-md-12">
    <label htmlFor="validationDefault14" className="form-label mandatory"> Correspond Address </label>
    <textarea   className="form-control" id="validationDefault14" cols="9" rows="2"></textarea>
  
  </div>


 {/* ------------/////////////////////////// State ///////////////-------------------- */}

  <div className="col-md-3">
    <label htmlFor="validationDefault15" className="form-label mandatory">State</label>
    <select className="form-select" id="validationDefault15" required>
      <option selected disabled value="">Choose...</option>
      <option>Uttarakhand</option>
      <option>Delhi</option>
    </select>
  </div>
 
 {/* ------------/////////////////////////// District///////////////-------------------- */}

 <div className="col-md-3">
    <label htmlFor="validationDefault16" className="form-label mandatory">District</label>
    <select className="form-select" id="validationDefault16" required>
      <option selected disabled value="">Choose...</option>
      <option>haridwar</option>
      <option>New Delhi</option>
    </select>
  </div>
 
 {/* ------------/////////////////////////// City ///////////////-------------------- */}

 <div className="col-md-3">
    <label htmlFor="validationDefault17" className="form-label mandatory">City</label>
    <input type="text" className={`form-control  `} id="validationDefault17" required/>
  
  </div>


{/* ------------/////////////////////////// Pin code ///////////////-------------------- */}

<div className="col-md-3">
    <label htmlFor="validationDefault17" className="form-label mandatory">pin code</label>
    <input type="text" className="form-control"  id="validationDefault17" required/>
  </div>



  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
  </div>
  )
}
