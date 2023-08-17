import React from "react";

const Field = ({label, name, type, disabled, value, isValid, handleChange, adrs, required}) => {
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
        onChange={(adrs && adrs == 1 ? (e)=>handleChange(e, 1) : adrs == 2 ? (e)=>handleChange(e, 2) : handleChange) || handleChange }
        autoComplete="off"
        {...required}
      />
      <div className="invalid-feedback"></div>
    </div>
  );
};

export default Field;
