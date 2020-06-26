import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import BooksPage from './BooksPage';
import DashboardHome from './DashboardHome';
import AddBookPage from './AddBookPage';

import '../css/Dashboard.css'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true
    };

    this.logout = this.logout.bind(this);
    this.goToDashboard = this.goToDashboard.bind(this);
    this.goToBooks = this.goToBooks.bind(this);
  }

  logout() {
    this.setState({
      loggedIn: false
    });
  }

  goToDashboard() {

  }

  goToBooks() {

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
            <div className="MenuItem" onClick={this.goToDashboard}>Dashboard</div>
            <div className="MenuItem" onClick={this.goToBooks}>Library Books</div>
            <div className="MenuItem">Library Members</div>
            <div className="MenuItem">Book Request</div>
            <div className="MenuItem">Library Info</div>
            <div className="MenuItem">Issue / Returns</div>
          </div>
          <div className="Content">
            <BooksPage />
            {/* <DashboardHome/> */}
            {/* <AddBookPage /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
