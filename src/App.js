import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"
import NavBar from "./components/layout/NavBar"
import Home from "./components/Pages/Home"
import Alert from "./components/layout/Alert"
import About from "./components/Pages/About"
import User from "./components/users/User"
import AlertState from "./context/alert/AlertState"
import GithubState from "./context/github/GithubState"
import NotFound from "./components/Pages/NotFound"

const App = () => {


  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <NavBar />
            <div className="container">
              <Alert />
              <Switch >
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />

              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}


export default App;
