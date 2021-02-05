import React from "react";
import Delete from "../Delete";
import { Link } from "react-router-dom";
import Edit from "../Edit";

const TableBody = ({ employees, handleDelite }) => {
  return (
    <tbody>
      {employees.map(employee => (
        <tr key={employee.id}>
          <td>
            <i style={{ color: employee.color }} className="fas fa-circle" />
          </td>
          <td>
            <Link to={`/employees/view/${employee.id}`}>{employee.name}</Link>
          </td>
          <td>{employee.profession}</td>
          <td>{employee.city}</td>
          <td>{employee.branch}</td>
          <td>
            <Edit {...employee} />
            <Delete handleDelite={handleDelite} id={employee.id} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
