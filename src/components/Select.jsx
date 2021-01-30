import React from "react";

const Select = props => {
  const {data, name, label, options, error, ...rest } = props;
 console.log(data, options)
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} className="form-control" {...rest}>
        <option value="" />
        {options.map(option => (
          <option key={option} value={option}>
            {option}
            
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
