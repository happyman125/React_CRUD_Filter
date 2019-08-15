import React from "react";
import { Link } from "react-router-dom";

const Edit = employee => {
  return (
    <Link to={`/employees/view/${employee.id}`}>
      <i className="fas fa-pencil-alt " />
    </Link>
  );
};

export default Edit;
