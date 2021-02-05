import React from "react";

const Delete = ({ handleDelite, id }) => {
  return (
    <i
      style={{ color: "red" }}
      className="far fa-trash-alt clickable ml-2"
      onClick={() => handleDelite(id)}
    />
  );
};

export default Delete;
