import React from "react";

const Select = ({
  label,
  name, 
  simple,
  multi,
  value,
  handleChange,
  isValid,
  adrs
}) => {
 
  return (
    <div className="col-md-4">
      <label className="form-label mandatory"> {label} </label>
      <select
        name={name}
        id={`validation${name}`}
        className="form-select" 
        value={value || ""}
        onChange={(adrs && adrs == 1 ? (e)=>handleChange(e, 1) : adrs == 2 ? (e)=>handleChange(e, 2) : handleChange) || handleChange }
        onChangeCapture={isValid}
        onBlur={isValid} 
      >
        <option>-----------------</option>
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
