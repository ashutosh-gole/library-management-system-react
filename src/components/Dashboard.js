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
import LibraryInfo from './LibraryInfo';
import BookRequestPage from './BookRequestPage';
import IssueReturnBooks from './IssueReturnBooks';
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
            <NavLink activeClassName="MenuItemActive--active" className="MenuItem" to="/dashboard/dashboard">Dashboard</NavLink>
            <NavLink activeClassName="MenuItemActive--active" className="MenuItem" to="/dashboard/library-books">Library Books</NavLink>
            <NavLink activeClassName="MenuItemActive--active" className="MenuItem" to="/dashboard/library-members">Library Members</NavLink>
            <NavLink activeClassName="MenuItemActive--active" className="MenuItem" to="/dashboard/book-request">Book Request</NavLink>
            <NavLink activeClassName="MenuItemActive--active" className="MenuItem" to="/dashboard/library-info">Library Info</NavLink>
            <NavLink activeClassName="MenuItemActive--active" className="MenuItem" to="/dashboard/issue-returns">Issue / Returns</NavLink>
          </div>
          <div className="Content">
            <Switch>
              <Route exact path="/dashboard/"><Redirect to="/dashboard/dashboard" /></Route>
              <Route path="/dashboard/dashboard" component={DashboardHome}></Route>
              <Route path="/dashboard/library-books" component={BooksPage}></Route>
              <Route path="/dashboard/library-members" component={Users}></Route>
              <Route path="/dashboard/book-request" component={BookRequestPage}></Route>
              <Route path="/dashboard/library-info" component={LibraryInfo}></Route>
              <Route path="/dashboard/issue-returns" component={IssueReturnBooks}></Route>
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
