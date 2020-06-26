import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import MainPage from './components/MainPage';
import Dashboard from './components/Dashboard';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
            <Switch>
              <Route exact path="/" component={MainPage}></Route>
              {/* <Route path="/sign-in" component={SignInForm}></Route>
              <Route path="/sign-up" component={SignUpForm}></Route> */}
              <Route exact path="/main" component={MainPage}></Route>
              <Route exact path="/dashboard" component={Dashboard}></Route>
              <Route component={NotFoundPage}></Route>
            </Switch>
      </Router>
    );
  }
}

export default App;