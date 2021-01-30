import React, { Component } from "react";
import Joi from "joi";
import Input from "./Iput";
import Select from "./Select";

class Form extends Component {
  state = {
    data: [],
    errors: []
  };

  // validateProperty = ({name, value}) => {
  //   let obj = { [name]: value };
  //   let schema = { [name]: this.schema[name] };
  //   let { error } = Joi.validate(obj, schema);
  //   return error ? error.details[0].message : null;
  // }

  // validate = () => {
  //   let {data} = this.state;
  //   let options = { abortEarly: false }
   
  //   let { error } = Joi.validate(data, this.schema, options);
    
  //   if (!error) return null;

  //   let errors = {};
  //   for (let item of error.details) errors[item.path[0]] = item.message;
  //   return errors;
  // }
  
  handleSubmit = e => {
    e.preventDefault();

    // let errors = this.validate();
    // this.setState({ errors: errors || {}});
    // if(errors) return;

    this.doSubmit();
  }

  handleChange = ({currentTarget: input}) => {
    // let errors = {...this.state.errors};
    // let errorMessage = this.validateProperty(input);
    // if (errorMessage) errors[input.name] = errorMessage;
    // else delete errors[input.name];

    let data = {...this.state.data};
    data[input.name] = input.value;
    this.setState({ data})
   
  }



  renderButton(label){

    return (
      <button 
        // disabled={this.validate()}
        className="btn btn-primary">{label}
      </button>
     )

}

  renderInput(name, label, type = "text") {
    let { data} = this.state;
    return (
      <Input
        onChange={this.handleChange}
        name={name}
        type={type}
        value={data[name]}
        label={label}
       data={data}
      />
    );
  }

  renderSelect(name, label, options) {
    let { data } = this.state;
    return (
      <Select
        onChange={this.handleChange}
        name={name}
        value={data[name]}
        label={label}
        options={options}
        data={data}
      />
    );
  }
}

export default Form;
