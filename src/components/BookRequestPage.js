import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import axios from "axios";

import '../css/BookRequestPage.css';

class BookRequestPage extends Component {
  render() {
    return (
      <div className="BookRequestPage">
        <h1>Book Request Page</h1>
      </div>
    );
  }
}

export default BookRequestPage;