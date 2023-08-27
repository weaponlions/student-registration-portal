import React, { useEffect } from "react";

const Field = ({label, name, type, disabled, value, isValid, handleChange, adrs, required=true, min, max, step }) => {

  useEffect(() => { 
    let ele = document.getElementById(`validation${name}`); 
    if (required == false) {
      ele.removeAttribute('required') 
    } 
  }, [])

  const handleAdrs = (e) => {
    if(adrs && adrs != ''){
      handleChange(e, adrs)
    }
    else{
      handleChange(e)
    }  
  }
   
  return (
    <div className="col-md-4">
      <label htmlFor={`validation${name}`} className="form-label mandatory">
        {label}
      </label>
      <input
        type={type || 'text'}
        className="form-control"
        id={`validation${name}`}
        name={name}
        disabled={disabled || false}
        value={value || ''}
        onBlur={isValid}
        onChangeCapture={isValid}
        onChange={handleAdrs}
        autoComplete="off" 
        required
        min={min}
        max={max}
        step={step} 
      />
      <div className="invalid-feedback"></div>
    </div>
  );
};

export default Field;
