import React from "react";

export default function Personal() {

  const handleValidation = (e) => { 
    const currEle = e.target
    if (currEle.value == '' || currEle.validationMessage != ''){
      currEle.classList.remove('is-valid');
      currEle.classList.add('is-invalid');
      let warnBox = e.target.nextElementSibling;
      warnBox.innerHTML = e.target.validationMessage;
    }
    else{
      currEle.classList.remove('is-invalid');
      currEle.classList.add('is-valid');
    } 
    
  }
  
  return (
    <div className="container">
      <form className="row g-3 needs-validation">
        {/* -----------/////////////////////// Course Name ///////////////////////////////---------------------------- */}
        <div className="col-md-4">
          <label htmlFor="validationCourse" className="form-label mandatory"> Course Name </label>
          <input
            type="text"
            className="form-control"
            id="validationCourse"
            required
            disabled
          />
          <div className="invalid-feedback"></div>
        </div>

        {/* -----------/////////////////////// Name ///////////////////////////////---------------------------- */}
        <div className="col-md-4">
          <label htmlFor="validationFullName" className="form-label"> Applicant's full name </label>
          <input
            type="text"
            className="form-control"
            id="validationFullName"
            required
            onBlur={(e) => handleValidation}
          /> 
          <div className="invalid-feedback"></div>
        </div>

        {/* ------------------------//////////////////// father Name ////////////////////////////----------------------- */}
        <div className="col-md-4">
          <label htmlFor="validationFname" className="form-label mandatory">
            Father Name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationFname"
            required
            onBlur={(e) => handleValidation}
          />
          <div className="invalid-feedback"></div>
        </div>

        {/* -----------------------/////////////////////// Mother name //////////////////---------------------- */}
        <div className="col-md-4">
          <label htmlFor="validationMname" className="form-label mandatory">
            Mother Name{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="validationMname"
            required
            onBlur={(e) => handleValidation}
          />
          <div className="invalid-feedback"></div>
        </div>

        {/* ----------------------- ///////////////// gender ///////////////////////////-------------------------- */}

        <div className="col-md-4">
          <label className="form-label mandatory"> Gender </label>
          <select className="form-select" required> 
            <option selected value="M">Male</option>
            <option value="F">Female</option>
            <option value="T">Transgender</option>
          </select>
        </div>

        {/* ------------------//////////////////////// DOB /////////////////=------------------------ */}
        <div className="col-md-4">
          <label htmlFor="validationDOB" className="form-label mandatory"> DOB </label>
          <input
            type="date"
            className="form-control"
            id="validationDOB"
            required
          />
        </div> 
        <div className="invalid-feedback"></div>
        {/* ------------/////////////////////////// email ///////////////-------------------- */}

        <div className="col-md-4">
          <label htmlFor="validationEmail" className="form-label mandatory"> Email Address{" "} </label>
          <input
            type="email"
            className="form-control"
            id="validationEmail"
            required
          />
        </div>
        <div className="invalid-feedback"></div>
        {/* --------------------/////////////////////// Marital Status /////////////////--------------------- */}
        <div className="col-md-4">
          <label htmlFor="validationDefault06" className="form-label mandatory">
            Marital Status
          </label>
          <select className="form-select" required> 
            <option selected value={'Single'} >Single</option>
            <option value={'Married'}>Married</option>
            <option value={'Divorced'}>Divorced</option>
            <option value={'Widowed'}>Widowed</option>
          </select>
        </div>

        {/* --------------------/////////////////////// Category  /////////////////--------------------- */}
        <div className="col-md-4">
          <label className="form-label mandatory"> Category </label>
          <select className="form-select" required> 
            <option selected value={'OBC'}>OBC</option>
            <option value={'General'}>General</option>
            <option value={'SC'}>SC</option>
            <option value={'ST'}>ST</option>
          </select>
        </div>

        {/* --------------------/////////////////////// handicapped  /////////////////--------------------- */}

        <div className="col-md-4">
          <label className="form-label mandatory"> Pwd </label>
          <select className="form-select" required> 
            <option selected value={'false'}>No</option>
            <option value={'true'}>Yes</option>
          </select>
        </div>

        {/* --------------------/////////////////////// Religion  /////////////////--------------------- */}

        <div className="col-md-4">
          <label className="form-label mandatory"> Religion </label>
          <select name="religion" className="form-select" required >
            <option >select a option</option>
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
          <label htmlFor="validationPhone" className="form-label mandatory"> Phone No.{" "}</label>
          <input
            type="text"
            placeholder="Number"
            maxLength="10"
            className="form-control"
            id="validationPhone"
            required
          />
        </div>
          <div className="invalid-feedback"></div>

        {/* ------------/////////////////////////// Parent Phone No. ///////////////-------------------- */}

        <div className="col-md-4">
          <label htmlFor="validationPphone" className="form-label mandatory"> Parent Phone No. </label>
          <input
            type="text"
            placeholder="Number"
            maxLength="10"
            className={`form-control `}
            id="validationPphone"
            required
          />
          <div className="invalid-feedback"></div>
        </div>

        {/* ------------/////////////////////////// Permanent Address ///////////////-------------------- */}

        <div className="col-md-12">
          <label htmlFor="validationDefault13" className="form-label mandatory"> Permanent Address </label>
          <textarea
            className="form-control"
            id="validationDefault13"
            cols="9"
            rows="2"
          ></textarea>
        </div>
          <div className="invalid-feedback"></div>

        {/* ------------/////////////////////////// Correspond Address ///////////////-------------------- */}

        <div className="col-md-12">
          <label htmlFor="validationDefault14" className="form-label mandatory">
            {" "}
            Correspond Address{" "}
          </label>
          <textarea
            className="form-control"
            id="validationDefault14"
            cols="9"
            rows="2"
          ></textarea>
        </div>

        {/* ------------/////////////////////////// State ///////////////-------------------- */}

        <div className="col-md-3">
          <label htmlFor="validationDefault15" className="form-label mandatory">
            State
          </label>
          <select className="form-select" id="validationDefault15" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>Uttarakhand</option>
            <option>Delhi</option>
          </select>
        </div>

        {/* ------------/////////////////////////// District///////////////-------------------- */}

        <div className="col-md-3">
          <label htmlFor="validationDefault16" className="form-label mandatory">
            District
          </label>
          <select className="form-select" id="validationDefault16" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>haridwar</option>
            <option>New Delhi</option>
          </select>
        </div>

        {/* ------------/////////////////////////// City ///////////////-------------------- */}

        <div className="col-md-3">
          <label htmlFor="validationDefault17" className="form-label mandatory">
            City
          </label>
          <input
            type="text"
            className={`form-control  `}
            id="validationDefault17"
            required
          />
        </div>

        {/* ------------/////////////////////////// Pin code ///////////////-------------------- */}

        <div className="col-md-3">
          <label htmlFor="validationDefault17" className="form-label mandatory">
            pin code
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault17"
            required
          />
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}
