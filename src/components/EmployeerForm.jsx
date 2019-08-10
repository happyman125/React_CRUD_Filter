import React from "react";
import Form from "./Form";
import Joi from "joi";

class EmployeerForm extends Form {
  state = {
    data: [],
    codes: ["F100", "F101", "F102", "F103", "F104", "F105", "F106"],
    professions: ["Drywall Installer", "Runner"],
    colors: ["#FF6600", "yellow", "green", "#333333", "red"],
    cityes: ["Toronto","Brampton", "Bolton"],
    branchs: ["Abacus", "Pillsworth"],
    assigned: true
    

    // errors: []
  };

  schema = {
    id: Joi.number().required(),
    name: Joi.string()
      .min(3)
      .required()
      .label("Name"),
    code: Joi.string()
      .required()
      .label("Code"),
    profession: Joi.string()
      .min(0)
      .max(50)
      .label("Profession"),
    city: Joi.string()
      .min(0)
      .max(50)
      .label("City"),
    branch: Joi.string()
      .min(0)
      .max(50)
      .label("Branch"),
    assigned: Joi.bool().label("Assigned")
  };

  handleClick = e => {
    e.preventDefault();
    this.props.history.push("/employees");
  };

  componentDidMount = async () => {
    await fetch("http://localhost:8080/api/employees")
      .then(response => response.json())
      .then(employees => this.getEmployeerById(employees));
  };

  getEmployeerById(employees) {
    let id = Number(this.props.match.params.id);
    let data;
    let employeer = employees.filter(emp => {
      return emp.id === id;
    });

    for (let key in employeer) {
      data = {
        id: employeer[key].id,
        name: employeer[key].name,
        code: employeer[key].code,
        profession: employeer[key].profession,
        color: employeer[key].color,
        city: employeer[key].city,
        branch: employeer[key].branch,
        assigned: employeer[key].assigned
      };
    }
    this.setState({ data });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("name", "Name")}
        {this.renderSelect("code", "Code", this.state.codes)}
        {this.renderSelect("profession", "Profession", this.state.professions)}
        {this.renderSelect("color", "Color", this.state.colors)}
        {this.renderSelect("city", "City", this.state.cityes)}
        {this.renderSelect("branch", "Branch", this.state.branchs)}
        {this.renderSelect("assigned", "Assigned", this.state.assigned)}
        {this.renderButton("Save")}
      </form>
    );
  }
}

export default EmployeerForm;
