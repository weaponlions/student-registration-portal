import React, { useEffect } from "react";

const Select = ({
  label,
  name, 
  simple,
  multi,
  value,
  handleChange,
  isValid,
  adrs,
  required
}) => {

  
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
      <label className="form-label mandatory"> {label} </label>
      <select
        name={name}
        id={`validation${name}`}
        className="form-select" 
        value={value || ""}
        onChange={handleAdrs}
        onChangeCapture={isValid}
        onBlur={isValid} 
        required
      >
        <option disabled value={''}>-----------------</option>
        {simple &&
          simple.map((ele, i) => {
            return (
              <option key={i} value={ele}>
                {" "}
                {ele}{" "}
              </option>
            );
          })}

        {multi &&
          multi.map((ele, i) => {
            return (
              <option key={i} value={ele.short}>
                {" "}
                {ele.full}{" "}
              </option>
            );
          })}
      </select>
      <div className="invalid-feedback"></div>
    </div>
  );
};

export default Select;
