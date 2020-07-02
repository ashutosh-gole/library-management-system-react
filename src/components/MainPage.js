import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';

import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

class MainPage extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink exact to="/main/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink to="/main/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>

            <div className="FormTitle">
              <NavLink exact to="/main/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>
           or
          <NavLink to="/main/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div>
            <Route exact path="/main/"><Redirect to="/main/sign-in" /></Route>
            <Route path="/main/sign-in" component={SignInForm}></Route>
            <Route path="/main/sign-up" component={SignUpForm}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default MainPage;