import React from "react";
import Tableheader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({employees, handleDelite, thead, onSort, sortColumn}) => {
  return (
    <table className="table table-hover ">
      <Tableheader thead={thead} onSort={onSort} sortColumn={sortColumn}/>
      <TableBody employees={employees} handleDelite={handleDelite} />
    </table>
  );
};

export default Table;
