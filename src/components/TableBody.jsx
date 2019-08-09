import React from "react";

import Button from "./Button";
import { Link } from "react-router-dom";

const TableBody = ({ employees, handleDelite }) => {
  return (
    <tbody>
      {employees.map(employee => (
        <tr key={employee.id}>
          <td style={{ backgroundColor: employee.color }} />
          <td>
            <Link to={`/employees/${employee.id}`}>{employee.name}</Link>
          </td>
          <td>{employee.profession}</td>
          <td>{employee.city}</td>
          <td>{employee.branch}</td>
          <td>
            <Button handleDelite={handleDelite} id={employee.id} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};


export default TableBody;
