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
    let { onSort} = this.props;

    return (
      <thead >
        <tr>
          <th scope="col " />
          <th onClick={() => onSort("Name")} scope="col" className="clickable">
            Name {this.renderSortIcon("Name")}
          </th>
          <th
            onClick={() => onSort("Profession")}
            scope="col"
            className="clickable"
          >
            Profession {this.renderSortIcon("Profession")}
          </th>
          <th onClick={() => onSort("City")} scope="col" className="clickable">
            City {this.renderSortIcon("City")}
          </th>
          <th
            onClick={() => onSort("Branch")}
            scope="col"
            className="clickable"
          >
            Branch {this.renderSortIcon("Branch")}
          </th>
          <th scope="col" />
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
