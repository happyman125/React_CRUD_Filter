import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Employees from "./components/Employees";
import NavBar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import EmployeerForm from "./components/EmployeerForm";

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/employees/view/:id" component={EmployeerForm} />
            <Route path="/employees/new" component={EmployeerForm} />
            <Route path="/employees" component={Employees} />
            <Redirect from="/" exact to="/employees" />
            <Route path="/not-found" exact component={PageNotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
