import React, { Component } from "react";

class TableHeader extends Component {
  renderSortIcon = value => {
    let { thead, sortColumn } = this.props;

    if (value === thead) {
      if (sortColumn.order === "asc") {
        return <i className="fa fa-sort-asc" />;
      } else {
        return <i className="fa fa-sort-desc" />;
      }
    }
  };

  render() {
    let { onSort } = this.props;

    return (
      <thead>
        <tr>
          <th scope="col " />
          <th onClick={() => onSort("name")} scope="col" className="clickable">
            Name {this.renderSortIcon("name")}
          </th>
          <th
            onClick={() => onSort("profession")}
            scope="col"
            className="clickable"
          >
            Profession {this.renderSortIcon("profession")}
          </th>
          <th onClick={() => onSort("city")} scope="col" className="clickable">
            City {this.renderSortIcon("city")}
          </th>
          <th scope="col">Branch</th>
          <th scope="col" />
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
