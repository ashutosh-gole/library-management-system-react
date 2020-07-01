import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import axios from "axios";

import '../css/LibraryInfo.css';

class LibraryInfo extends Component {
  render() {
    return (
      <div className="LibraryInfo">
        <h1>Library Info Page</h1>
      </div>
    );
  }
}

export default LibraryInfo;