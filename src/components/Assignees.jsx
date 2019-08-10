import React from "react";

const Assignees = ({ onItemSelect, filtered, employees }) => {

  let assigned = employees.filter(e => e.assigned === true);
  let notAssigned = employees.filter(e => e.assigned !== true);

  return (
    <ul className="list-group row m-1">
      <li
        className={
          filtered.length === employees.length
            ? "list-group-item active clickable"
            : "list-group-item clickable"
        }
        onClick={() => onItemSelect(employees)}
      >
        All Epmloyees
      </li>
      <li
        className={
          filtered.length === assigned.length
            ? "list-group-item active clickable"
            : "list-group-item clickable"
        }
        onClick={() => onItemSelect(assigned)}
      >
        Assigned
      </li>
      <li
        className={
          filtered.length === notAssigned.length
            ? "list-group-item active clickable"
            : "list-group-item clickable"
        }
        onClick={() => onItemSelect(notAssigned)}
      >
        Not assigned
      </li>
    </ul>
  );
};

export default Assignees;
