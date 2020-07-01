import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import axios from "axios";

import '../css/IssueReturnBooks.css';

class IssueReturnBooks extends Component {
  render() {
    return (
      <div className="IssueReturnBooks">
        <h1>Issue Return Page</h1>
      </div>
    );
  }
}

export default IssueReturnBooks;