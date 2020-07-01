import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  useParams,
  useRouteMatch,
  Redirect
} from 'react-router-dom';

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
          <Route exact path="/"><Redirect to="/main" /></Route>
          <Route path="/main" component={MainPage}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="*" component={NotFoundPage}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;