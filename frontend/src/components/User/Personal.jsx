import React, { useState } from "react";
import Field from "./Items/Field";
import Select from "./Items/Select";
import { genderList, maritalList, religionList, categoryList, stateList, districtList } from "./Items/List"; 

const details = {
  course_id: '', name: '', father: '', mother: '', gender: '', dob: '', email: '', marital: '', category: '', pwd: '', religion: '', mobile: '', whatsapp: '', 
}
const address1 = {
  permanent: '', state: '', city: '', district: '', pincode: ''
}
const address2 = {
  correspond: '', state: '', city: '', district: '', pincode: ''
}

export default function Personal() {

  const [userData, setUserData] = useState(details)
  const [userAdrs1, setUserAdrs1] = useState(address1)
  const [userAdrs2, setUserAdrs2] = useState(address2)

  const isFieldValid = (e) => { 
    const currEle = e.target;
    if (currEle.value == '' || currEle.validationMessage != '' || currEle.value == "-----------------"){
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
  
  const handleChange = (e, num) => { 
    if (num == 1) {
      setUserAdrs1({...userAdrs1, [e.target.name]: e.target.value});
    }
    else if (num == 2){
      setUserAdrs2({...userAdrs2, [e.target.name]: e.target.value}) 
    }
    else{
      setUserData({...userData, [e.target.name]: e.target.value});
    }
  }
 

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(userData);
    console.log(userAdrs1);
    console.log(userAdrs2);
  }

  return (
    <div className="container">
      <form className="row g-3 needs-validation" onSubmit={handleSubmit}>

      <Field name={'course_name'} label={'Course Name'} value={''} required={'required'} disabled={true} isValid={isFieldValid} handleChange={handleChange} />
      
      <Field name={'name'} label={'Full Name'} value={userData.name} isValid={isFieldValid} handleChange={handleChange} />
      
      <Field name={'father'} label={'Father Name'} value={userData.father} isValid={isFieldValid} handleChange={handleChange} />
      
      <Field name={'mother'} label={'Mother Name'} value={userData.mother} isValid={isFieldValid} handleChange={handleChange} />
            
      <Select label={'Gender'} name={'gender'} value={userData.gender} multi={genderList} isValid={isFieldValid} handleChange={handleChange} />  
           
      <Field name={'dob'} label={'Date of Birth'} type={'date'} value={userData.dob} isValid={isFieldValid} handleChange={handleChange} />
      
      <Field name={'email'} label={'Email Address'} type={'email'} value={userData.email} isValid={isFieldValid} handleChange={handleChange} disabled={true} />
         
      <Select label={'Marital Status'} name={'marital'} isValid={isFieldValid} value={userData.marital} simple={maritalList} handleChange={handleChange} /> 

      <Select label={'Category'} name={'category'} isValid={isFieldValid} value={userData.category} simple={categoryList} handleChange={handleChange} />  
             
 
        <div className="col-md-4">
          <label className="form-label mandatory"> Pwd </label>

          <input type={'radio'} name={'pwd'} value={false} />
          <label className="form-label mandatory"> No </label>

          <input type={'radio'} name={'pwd'} value={true} />
          <label className="form-label mandatory"> Yes </label>
        </div>
 

      <Select label={'Religion'} name={'religion'} isValid={isFieldValid} value={userData.religion} multi={religionList} handleChange={handleChange} />   
 
      <Field name={'mobile'} label={'Mobile No.'} value={userData.mobile} isValid={isFieldValid} handleChange={handleChange} />
      
      <Field name={'whatsapp'} label={'Whatsapp No.'} required={false} value={userData.whatsapp} isValid={isFieldValid} handleChange={handleChange} />
             
      <div className="row g-3">
        <Field name={'permanent'} label={'Permanent Address'} adrs={1} value={userAdrs1.permanent} isValid={isFieldValid} handleChange={handleChange} />
        <Select label={'State'} name={'state'} isValid={isFieldValid} value={userAdrs1.state} multi={stateList} handleChange={handleChange} />
        {/* <Select label={'District'} name={'per_district'} isValid={isFieldValid} simple={districtList} handleChange={handleChange} /> */}
        <Field name={'city'} label={'City'} adrs={1} value={userAdrs1.city} isValid={isFieldValid} handleChange={handleChange} />
        <Field name={'pincode'} label={'Pincode'} adrs={1} value={userAdrs1.pincode} isValid={isFieldValid} handleChange={handleChange} />
      </div>

      <div className="row g-3">
        <Field name={'correspond'} label={'Correspond Address'} value={userAdrs2.correspond} isValid={isFieldValid} handleChange={handleChange} />
        <Select label={'State'} name={'state'} isValid={isFieldValid} value={userAdrs2.state} multi={stateList} handleChange={handleChange} />
        {/* <Select label={'District'} isValid={isFieldValid} name={'cor_district'} simple={districtList} handleChange={handleChange} /> */}
        <Field name={'city'} label={'City'} value={userAdrs2.city} isValid={isFieldValid} handleChange={handleChange} />
        <Field name={'pincode'} label={'Pincode'} value={userAdrs2.pincode} isValid={isFieldValid} handleChange={handleChange} />
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
