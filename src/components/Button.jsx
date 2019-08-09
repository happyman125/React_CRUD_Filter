import React from "react";

const Button = ({handleDelite, id}) => {
  return (
    <button className="btn btn-danger btn-sm" onClick={() => handleDelite(id)}>
      Delete
    </button>
  );
};

export default Button;
