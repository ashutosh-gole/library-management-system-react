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

import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import BooksPage from './BooksPage';
import DashboardHome from './DashboardHome';
import AddBookPage from './AddBookPage';
import Users from './Users';
import '../css/Dashboard.css'

class Dashboard extends Component {

  constructor(props) {
    super(props);

    // let { path, url } = useRouteMatch();

    this.state = {
      loggedIn: true
    };

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.setState({
      loggedIn: false
    });
  }

  render() {
    if (!this.state.loggedIn) {
      return <Redirect to="/" />
    }
    return (
      <div className="Dashboard">
        <div className="Header">
          <div className="Name">Library Management System</div>
          <div className="LogDetails">
            <div className="UserName">Welcome Ashutosh !</div>
            <button className="LogoutButton mr-20" onClick={this.logout}>Logout</button>
          </div>
        </div>
        <div className="MainConetnt">
          <div className="Menu">
            <div className="MenuItem"><Link to="/dashboard/dashboard">Dashboard</Link></div>
            <div className="MenuItem"><Link to="/dashboard/library-books">Library Books</Link></div>
            <div className="MenuItem"><Link to="/dashboard/library-members">Library Members</Link></div>
            <div className="MenuItem"><Link to="/dashboard/book-request">Book Request</Link></div>
            <div className="MenuItem"><Link to="/dashboard/library-info">Library Info</Link></div>
            <div className="MenuItem"><Link to="/dashboard/issue-returns">Issue / Returns</Link></div>
          </div>
          <div className="Content">
            <Switch>
              <Route exact path="/dashboard/"><Redirect to="/dashboard/dashboard" /></Route>
              <Route path="/dashboard/dashboard" component={DashboardHome}></Route>
              <Route path="/dashboard/library-books" component={BooksPage}></Route>
              <Route path="/dashboard/library-members" component={Users}></Route>
              <Route path="/dashboard/book-request" component={BooksPage}></Route>
              <Route path="/dashboard/library-info" component={BooksPage}></Route>
              <Route path="/dashboard/issue-returns" component={BooksPage}></Route>
            </Switch>
            {/* <BooksPage /> */}
            {/* <DashboardHome/> */}
            {/* <AddBookPage /> */}
            {/* <Users /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
