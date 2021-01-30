import React from "react";
export const Context = React.createContext();

export class Provider extends React.Component {
  state = {
    data: {
      emploeeyes: []
    },
    
    actions: {
      addEmploeeyes: emploeeyes => {
        this.setData({
          emploeeyes: [...this.data.emploeeyes, emploeeyes]
        });
      },


      changeEmploeeyes: emploeeyes => {
        this.setData(emploeeyes);
      }
    }
  };

  get data() {
    return this.state.data;
  }

  get actions() {
    return this.state.actions;
  }

  setData = (data, cb) => {
    let newData = { ...this.state.data, ...data };
    this.setState({ data: newData }, cb);
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Component => {
  return props => {
    return (
      <Context.Consumer>
        {context => <Component {...props} {...context} />}
      </Context.Consumer>
    );
  };
};
