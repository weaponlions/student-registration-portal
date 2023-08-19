import React, { useContext, useEffect, useState } from "react";
import Field from "./Items/Field";
import Select from "./Items/Select";
import { genderList, maritalList, religionList, categoryList, stateList, districtList } from "./Items/List"; 
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../context-api/UserState";
 
const details = {
  course_id: '', name: '', father: '', mother: '', gender: '', dob: '', marital: '', category: '', pwd: '', religion: '', mobile: '', whatsapp: '', 
}
const address1 = {
  full_address: '', state: '', city: '', district: '', pincode: ''
}
const address2 = {
  full_address: '', state: '', city: '', district: '', pincode: ''
}

export default function Personal() {
  const { userdata } = useContext(UserContext)
  const [userData, setUserData] = useState(details);
  const [userAdrs1, setUserAdrs1] = useState(address1); // permanent addrs
  const [userAdrs2, setUserAdrs2] = useState(address2); // corespond addrs
  const location = useLocation()
  const course_name = location.state.course_name
  const navigate = useNavigate()


  useEffect(() => {
     console.log(location.state);
     console.log(userdata);
  }, [])
  

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
    const currEle = e.target; 
    if(currEle.name == 'pincode' || currEle.name == 'mobile' || currEle.name == 'whatsapp'){
      currEle.value = (currEle.value.replaceAll(' ', ''));
      if(isNaN(currEle.value)) 
        return;
      
      let len = currEle.value.split('').length;
      if (currEle.name == 'pincode' && len > 6)
        return;
      else if ((currEle.name == 'mobile' || currEle.name == 'whatsapp') && len > 10)
        return; 
    }

    if (num == 1) {
      setUserAdrs1({...userAdrs1, [currEle.name]: currEle.value});
    }
    else if (num == 2){
      setUserAdrs2({...userAdrs2, [currEle.name]: currEle.value}) 
    }
    else{
      setUserData({...userData, [currEle.name]: currEle.value});
    }
  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(userData);
    console.log(userAdrs1);
    console.log(userAdrs2);
    navigate('/dashboard/step/preview', {state: {userData, userAdrs1, userAdrs2}})
  }

  return (
    <div className="container">
      <form className="row g-3 needs-validation" onSubmit={handleSubmit}>

      <Field name={'course_name'} label={'Course Name'} value={course_name} required={false} disabled={true} />
      
      <Field name={'name'} label={'Full Name'} value={userData.name} isValid={isFieldValid} handleChange={handleChange} />
      
      <Field name={'father'} label={'Father Name'} value={userData.father} isValid={isFieldValid} handleChange={handleChange} />
      
      <Field name={'mother'} label={'Mother Name'} value={userData.mother} isValid={isFieldValid} handleChange={handleChange} />
            
      <Select label={'Gender'} name={'gender'} value={userData.gender} multi={genderList} isValid={isFieldValid} handleChange={handleChange} />  
           
      <Field name={'dob'} label={'Date of Birth'} type={'date'} value={userData.dob} isValid={isFieldValid} handleChange={handleChange} />
      
      <Field name={'email'} label={'Email Address'} type={'email'} value={userdata.email} disabled={true} />
         
      <Select label={'Marital Status'} name={'marital'} isValid={isFieldValid} value={userData.marital} simple={maritalList} handleChange={handleChange} /> 

      <Select label={'Category'} name={'category'} isValid={isFieldValid} value={userData.category} simple={categoryList} handleChange={handleChange} />  
             

        <div className="col-md-4">
          <label className="form-label mandatory"> Pwd </label>

          <input type={'radio'} name={'pwd'} required value={false} />
          <label className="form-label mandatory"> No </label>

          <input type={'radio'} name={'pwd'} required value={true} />
          <label className="form-label mandatory"> Yes </label>
        </div>
 

      <Select label={'Religion'} name={'religion'} isValid={isFieldValid} value={userData.religion} multi={religionList} handleChange={handleChange} />   
 
      <Field name={'mobile'} label={'Mobile No.'} value={userData.mobile} isValid={isFieldValid} handleChange={handleChange} />
      
      <Field name={'whatsapp'} label={'Whatsapp No.'} required={false} value={userData.whatsapp} handleChange={handleChange} />
             
      <div className="row g-3">
        <Field name={'full_address'} label={'Permanent Address'} adrs={1} value={userAdrs1.full_address} isValid={isFieldValid} handleChange={handleChange} />
        <Select label={'State'} name={'state'} adrs={1} isValid={isFieldValid} value={userAdrs1.state} multi={stateList} handleChange={handleChange} />
        <Select label={'District'} name={'district'} adrs={1} isValid={isFieldValid} value={userAdrs1.district} simple={userAdrs1.state != '' && districtList[userAdrs1.state]} handleChange={handleChange} />
        <Field name={'city'} label={'City'} adrs={1} value={userAdrs1.city} isValid={isFieldValid} handleChange={handleChange} />
        <Field name={'pincode'} label={'Pincode'} adrs={1} value={userAdrs1.pincode} isValid={isFieldValid} handleChange={handleChange} />
      </div>

      <div className="row g-3">
        <Field name={'full_address'} label={'Correspond Address'} adrs={2} value={userAdrs2.full_address} isValid={isFieldValid} handleChange={handleChange} />
        <Select label={'State'} name={'state'} isValid={isFieldValid} adrs={2} value={userAdrs2.state} multi={stateList} handleChange={handleChange} />
        <Select label={'District'} isValid={isFieldValid} adrs={2} name={'district'} value={userAdrs2.district} simple={userAdrs2.state != '' && districtList[userAdrs2.state]} handleChange={handleChange} />
        <Field name={'city'} label={'City'} adrs={2} value={userAdrs2.city} isValid={isFieldValid} handleChange={handleChange} />
        <Field name={'pincode'} label={'Pincode'} adrs={2} value={userAdrs2.pincode} isValid={isFieldValid} handleChange={handleChange} />
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
