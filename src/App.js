import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CreateProject from "./Components/CreateProject";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar"
import ProjectDetail from "./Components/ProjectDetail";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/project/:id" component={ProjectDetail}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/create" component={CreateProject}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
