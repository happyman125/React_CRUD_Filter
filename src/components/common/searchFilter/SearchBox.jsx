import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      className="form-control"
      type="text"
      name="query"
      onChange={e => onChange(e.currentTarget.value)}
      placeholder="Search by name..."
      value={value}
    />
  );
};

export default SearchBox;
