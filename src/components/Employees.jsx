import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { paginate } from "../utils/paginate";
import Table from "./Table";
import Assignees from "./Assignees";
import Pagination from "./Pagination";
import SearchBox from "./SearchBox";

class Employees extends Component {
  state = {
    employees: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    path: "Name",
    selectedEmployeey: [],
    sortColumn: { path: "name", order: "asc" }
  };

  componentDidMount = async () => {
    await fetch("http://localhost:8080/api/employees")
      .then(response => response.json())
      .then(employees => this.setState({ employees }));
  };

  getPageData = () => {
    const {
      employees,
      sortColumn,
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

  handleDelite = id => {
    let employees = this.state.employees.filter(empoyee => empoyee.id !== id);
    this.setState({ employees });
  };

  handleEmployeesSelect = selectedEmployeey => {
    this.setState({ selectedEmployeey: selectedEmployeey, currentPage: 1 });
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
    const  sortColumn  = {...this.state.sortColumn};
    
    if (path.length > 1) {
      (sortColumn.order !== "desc") ? sortColumn.order = "desc" 
      : sortColumn.order = "asc"
      
    }

    this.setState({ sortColumn , path });
   
  };

  render() {
   
    const { employees, searchQuery, sortColumn , path} = this.state;
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
          <Link to="/movies/new" className="btn btn-primary btn-lg mb-2">
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
            itemCount={filtered.length}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Employees;
