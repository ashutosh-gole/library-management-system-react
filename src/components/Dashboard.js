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
import BookDetailsPage from './BookDetailsPage';
import DashboardHome from './DashboardHome';
import LibraryInfo from './LibraryInfo';
import BookRequestPage from './BookRequestPage';
import IssueReturnBooks from './IssueReturnBooks';
import AddBookPage from './AddBookPage';
import Users from './Users';
import '../css/Dashboard.css'

import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    // let { path, url } = useRouteMatch();

    this.state = {
      loggedIn: true
    };

    this.addBook = this.addBook.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.setState({
      loggedIn: false
    });
  }

  addBook() {
    this.props.history.push("/dashboard/add-book");
  }

  render() {
    if (!this.state.loggedIn) {
      return <Redirect to="/" />
    }
    return (
      <div className="Dashboard">
        <div className="Header">
          <div className="HeadeLeftContent">
            <div className="Name">Library Management System</div>
            <Tooltip title="Add Book" aria-label="add book" placement="right" arrow>
              <Icon style={{ color: 'green', fontSize: 60, cursor: 'pointer' }} onClick={this.addBook}>add_circle</Icon>
            </Tooltip>
          </div>
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
              <Route path="/dashboard/add-book" component={AddBookPage}></Route>
              <Route path="/dashboard/book/:id" component={BookDetailsPage}></Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
