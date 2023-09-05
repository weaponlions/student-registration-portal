import React, { useContext, useEffect, useState } from "react";
import Field from "../Items/Field";
import Select from "../Items/Select";
import { genderList, maritalList, religionList, categoryList, stateList, districtList } from "../Items/List"; 
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context-api/UserState";
import { initialize_StepOne, userInfo } from "../../../api";
 
const details = {
  course_id: '', name: '', father: '', mother: '', gender: '', dob: '', marital: '', category: '', pwd: false, religion: '', mobile: '', whatsapp: '', ews: true
}
const address1 = {
  full_address: '', state: '', city: '', district: '', pincode: ''
}
const address2 = {
  full_address: '', state: '', city: '', district: '', pincode: ''
}

export default function Personal() {
  const { userdata, setFormOne, formOne, setSelectedCourse } = useContext(UserContext);
  const [userData, setUserData] = useState(details);
  const [userAdrs1, setUserAdrs1] = useState(address1); // permanent addrs
  const [userAdrs2, setUserAdrs2] = useState(address2); // corespond addrs
  const [disabled, setDisabled] = useState(false);
  const [update, setUpdate] = useState(false);
  const [trigger, setTrigger] = useState(true); // corespond addrs same
  const location = useLocation();
  const { course_name, course_id } = {...location.state};
  const navigate = useNavigate();

  // for routing
  useEffect(() => { 
     if (!course_id) {
      navigate('../courses');
     }
     else{
      setSelectedCourse({course_name, course_id});
      setDisabled((formOne && formOne.userData) ? true : false);
     }
  }, [])

  // for load data 
  useEffect(() => { 
    if (location.state && location.state.course_id) {
      userInfo({})
        .then(({data}) => { 
          const { result } = data;
          if (result.length != 0) { 
              setUserAdrs1(result[0].permanent);
              setUserAdrs2(result[0].correspond); 
              setUserData(result[0].userData);
              setDisabled(true);
              setUpdate(true);
            }
        })
        .catch ((err) => {
          console.log(err.message); 
        })
    }
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

  const handleForm = (e) => { 
    e.preventDefault();
    setDisabled(true);
    alert("Please check all info before next step!!!!!!!!!!!");
  }

  const handleSubmit = async () => {
    const prom = new Promise( async(res, rej) => {
      try {
        const { data } = await initialize_StepOne({userData, permanent: userAdrs1, correspond: userAdrs2, update});
        console.log(data); 
        res();
      } catch (error) {
        rej(error)
      } 
    })
    prom.then((res)=> {
      navigate('../user/step_two');
    }).catch((err) => { 
      console.log(err.message);
    })
  }

  const sameAdrs = (e) => { 
    if (e.target.value == 'true') {
      setUserAdrs2(userAdrs1)
    }
    else{
      setUserAdrs2(address2)
    }
    setTrigger(prev => !prev)
  }


  return (
    <>
      <div style={{position: 'relative'}}>
        <div className="container my-5">
          <form className="row g-3 needs-validation" onSubmit={handleForm}>

          <Field name={'course_name'} label={'Course Name'} value={course_name && course_name} required={false} disabled={true} />
          
          <Field name={'name'} label={'Full Name'} value={userData.name} isValid={isFieldValid} handleChange={handleChange} disabled={disabled} />
          
          <Field name={'father'} label={'Father Name'} value={userData.father} isValid={isFieldValid} handleChange={handleChange} disabled={disabled} />
          
          <Field name={'mother'} label={'Mother Name'} value={userData.mother} isValid={isFieldValid} handleChange={handleChange} disabled={disabled} />
                
          <Select label={'Gender'} name={'gender'} value={userData.gender} multi={genderList} isValid={isFieldValid} handleChange={handleChange} disabled={disabled} />  
              
          <Field name={'dob'} label={'Date of Birth'} type={'date'} value={userData.dob} isValid={isFieldValid} handleChange={handleChange} disabled={disabled} />
          
          <Field name={'email'} label={'Email Address'} type={'email'} value={userdata.email} handleChange={handleChange} disabled={true} />
            
          <Select label={'Marital Status'} name={'marital'} isValid={isFieldValid} value={userData.marital} simple={maritalList} handleChange={handleChange} disabled={disabled} /> 

          <Select label={'Category'} name={'category'} isValid={isFieldValid} value={userData.category} simple={categoryList} handleChange={handleChange} disabled={disabled} />  
          
          <div className="col-md-4 d-flex justify-content-around">
            <label className="form-label mandatory"> Pwd </label>  
            <input type={'radio'} name={'pwd'} required value={'YES'} onChange={handleChange} disabled={disabled} />
            <label className="form-label mandatory"> Yes </label> 
            <input type={'radio'} name={'pwd'} required checked value={'NO'} onChange={handleChange} disabled={disabled} />
            <label className="form-label mandatory" value={'NO'}> No </label>
          </div>

          <div className="col-md-4 d-flex justify-content-around">
            <label className="form-label mandatory"> EWS </label>
            <div>
              <input type={'radio'} name={'ews'} required value={true} onChange={handleChange} disabled={disabled} />
              <label className="form-label"> Yes </label>  
            </div>
            <div className="invalid-feedback"></div>
            <div> 
              <input type={'radio'} name={'ews'} required value={false} onChange={handleChange} disabled={disabled} />
              <label className="form-label" > No </label>
            </div>
            <div className="invalid-feedback"></div>
          </div>

          <Select label={'Religion'} name={'religion'} isValid={isFieldValid} value={userData.religion} multi={religionList} handleChange={handleChange} disabled={disabled} />   
    
          <Field name={'mobile'} label={'Mobile No.'} value={userData.mobile} isValid={isFieldValid} handleChange={handleChange} disabled={disabled} />
          
          <Field name={'whatsapp'} label={'Whatsapp No.'} required={false} value={userData.whatsapp} handleChange={handleChange} disabled={disabled} />
                
          <div className="row g-3">
            <Field name={'full_address'} label={'Permanent Address'} adrs={1} value={userAdrs1.full_address} isValid={isFieldValid} handleChange={handleChange} disabled={disabled} />
            <Select label={'State'} name={'state'} adrs={1} isValid={isFieldValid} value={userAdrs1.state} multi={stateList} handleChange={handleChange} disabled={disabled} />
            <Select label={'District'} name={'district'} adrs={1} isValid={isFieldValid} value={userAdrs1.district} simple={userAdrs1.state != '' && districtList[userAdrs1.state]} handleChange={handleChange} disabled={disabled} />
            <Field name={'city'} label={'City'} adrs={1} value={userAdrs1.city} isValid={isFieldValid} handleChange={handleChange} disabled={disabled} />
            <Field name={'pincode'} label={'Pincode'} adrs={1} value={userAdrs1.pincode} isValid={isFieldValid} handleChange={handleChange} disabled={disabled} />
          </div>

          <div className="row g-3">
            <div className="form-switch w-100 d-flex justify-content-end">
              <label className="form-check-label mx-5" htmlFor="flexSwitchCheckChecked">Same as Permanent Address</label>
              <input className="form-check-input" type="checkbox" onClick={sameAdrs} value={trigger} role="switch" id="flexSwitchCheckChecked" />
            </div>
            <Field name={'full_address'} label={'Correspond Address'} adrs={2} value={userAdrs2.full_address} isValid={isFieldValid} handleChange={handleChange} disabled={disabled} />
            <Select label={'State'} name={'state'} isValid={isFieldValid} adrs={2} value={userAdrs2.state} multi={stateList} handleChange={handleChange} disabled={disabled} />
            <Select label={'District'} isValid={isFieldValid} adrs={2} name={'district'} value={userAdrs2.district} simple={userAdrs2.state != '' && districtList[userAdrs2.state]} handleChange={handleChange} disabled={disabled} />
            <Field name={'city'} label={'City'} adrs={2} value={userAdrs2.city} isValid={isFieldValid} handleChange={handleChange} disabled={disabled} />
            <Field name={'pincode'} label={'Pincode'} adrs={2} value={userAdrs2.pincode} isValid={isFieldValid} handleChange={handleChange} disabled={disabled} />
          </div>
          <div className="col-12 d-flex justify-content-center"> 
            <button className={`btn btn-primary m-3 ${disabled ? '': 'disabled'}`} onClick={() => setDisabled(false)} type="button" > Edit </button>
            <button className={`btn btn-primary m-3 ${disabled ? 'disabled': ''}`} type="submit" > Save </button>
            <button className={`btn btn-primary m-3 ${disabled ? '': 'disabled'}`} type="button" onClick={handleSubmit} > Next </button>
          </div>
          </form> 

        </div>
      </div>
    </>
  );
}