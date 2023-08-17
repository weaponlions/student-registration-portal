import {useState,React} from "react";
import Navbar from "../../UI/Navbar";
import nielit from "../../../assets/images/nielit.png";
import Personal from "../Personal";

export default function Personal2() {

  return (
    <>
<form className="needs-validation row m-4">
  
    <div className="col-md-1 ">
      <label htmlFor="validationCustom01">Salutation</label>
      <select name="Salutation" id="validationCustom01" className="form-select">
        <option value="">select</option>
        <option value="">Mr.</option>
        <option value="">Ms.</option>
        <option value="">Mrs.</option>
      
      </select>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
{/* ---------------//////////////// first name ////////////////////////--------------------------- */}

    <div className="col-md-3">
      <label htmlFor="validationCustom02">First name</label>
      <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" required/>
      <div className="valid-feedback">
        Looks good!
      </div>
     
    </div>

    {/* ---------------//////////////// middle name ////////////////////////--------------------------- */}

    <div className="col-md-3">
      <label htmlFor="validationCustom03">Middle name</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="Last name" required/>
      <div className="valid-feedback">
        Looks good!
      </div>
     
    </div>

    {/* ---------------//////////////// last name ////////////////////////--------------------------- */}

    <div className="col-md-3">
      <label htmlFor="validationCustom03">Last name</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="Last name" required/>
      <div className="valid-feedback">
        Looks good!
      </div>
     
    </div>

    {/* ---------------//////////////// first name ////////////////////////--------------------------- */}

    <div className="col-md-3">
      <label htmlFor="validationCustom02">First name</label>
      <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" required/>
      <div className="valid-feedback">
        Looks good!
      </div>
     
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationCustomUsername">Username</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupPrepend">@</span>
        </div>
        <input type="text" className="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required/>
        <div className="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>

  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label htmlFor="validationCustom03">City</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="City" required/>
      <div className="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label htmlFor="validationCustom04">State</label>
      <input type="text" className="form-control" id="validationCustom04" placeholder="State" required/>
      <div className="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label htmlFor="validationCustom05">Zip</label>
      <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required/>
      <div className="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" htmlFor="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button className="btn btn-primary" type="submit">Submit form</button>
</form>


    </>
  );
}
