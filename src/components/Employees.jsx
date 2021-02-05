import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { paginate } from "../utils/paginate";
import Table from "./common/table/Table";
import Assignees from "./common/onSelectFilter/Assignees";
import Pagination from "./common/pagination/Pagination";
import SearchBox from "./common/searchFilter/SearchBox";

class Employees extends Component {
  state = {
    employees: [],
    props: 1,
    currentPage: 1,
    pageSize: 7,
    searchQuery: "",
    path: "name",
    selectedEmployeey: [],
    sortColumn: { path: "name", order: "asc" }
  };

  getPageData = () => {
    const {
      sortColumn,
      employees,
      currentPage,
      pageSize,
      searchQuery,
      selectedEmployeey
    } = this.state;

    let filtered = employees;

    if (searchQuery)
      filtered = employees.filter(e =>
        e.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedEmployeey !== null && selectedEmployeey.length > 0) {
      filtered = [];
      for (let i in selectedEmployeey) {
        for (let x in employees) {
          if (selectedEmployeey[i].id === employees[x].id)
            filtered.push(selectedEmployeey[i]);
        }
      }
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const employeesPerPage = paginate(sorted, currentPage, pageSize);
    return { filtered, employeesPerPage };
  };

  //Delete employeer by Id & update the state
  handleDelite = async id => {
    await fetch(`http://localhost:8080/api/employees/${id}`, {
      method: "delete"
    }).then(async () => {
      await fetch(`http://localhost:8080/api/employees/`, {
        method: "get"
      })
        .then(response => response.json())
        .then(employees => {
          this.setState({ ...employees });
        });
    });
  };

  handleEmployeesSelect = selectedEmployeey => {
    this.setState({
      selectedEmployeey: selectedEmployeey,
      searchQuery: "",
      currentPage: 1
    });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSearch = query => {
    this.setState({
      searchQuery: query,
      selectedEmployeey: null,
      currentPage: 1
    });
  };

  handleSorting = path => {
    const sortColumn = { ...this.state.sortColumn };

    sortColumn.order !== "desc"
      ? (sortColumn.order = "desc")
      : (sortColumn.order = "asc");

    this.setState({ sortColumn, path });
  };

  componentDidMount = async () => {
    await fetch(`http://localhost:8080/api/employees/`)
      .then(response => response.json())
      .then(employees => this.setState({ ...employees }));
  };

  render() {
    const { searchQuery, employees, sortColumn, path } = this.state;
    const { filtered, employeesPerPage } = this.getPageData();

    return (
      <div className="row">
        <div className="col-3">
          <Assignees
            filtered={filtered}
            onSelect={this.activStile}
            onItemSelect={this.handleEmployeesSelect}
            employees={employees}
          />
        </div>
        <div className="col">
          <Link to="/employees/new" className="btn btn-primary btn-lg mb-2">
            New Employer
          </Link>
          <p>
            {!filtered.length
              ? `There are no employees in the data base`
              : `${filtered.length} employees in the data base`}
          </p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <Table
            onSort={this.handleSorting}
            sortColumn={sortColumn}
            thead={path}
            employees={employeesPerPage}
            handleDelite={this.handleDelite}
          />
          <Pagination
            {...this.state}
            onPageChange={this.handlePageChange}
            itemCount={filtered.length}
          />
        </div>
      </div>
    );
  }
}

export default Employees;
