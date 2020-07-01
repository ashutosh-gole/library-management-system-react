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
import axios from "axios";

import '../css/DashboardHome.css'

class DashboardHome extends Component {
  constructor(props) {
    super(props);

    this.goToLibraryBooks = this.goToLibraryBooks.bind(this);
    this.goToLibraryMembers = this.goToLibraryMembers.bind(this);
    this.goToIssueReturnBooks = this.goToIssueReturnBooks.bind(this);
  }

  state = {
    bookData: [],
    userData: [],
    issueBookData: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3003/books/`)
      .then((res) => {
        if (res.status == 200) {
          this.setState({ bookData: res.data })
        }
      })
      .catch((err) => {
        console.log(err);
      })


    axios.get(`http://localhost:3003/users/`)
      .then((res) => {
        if (res.status == 200) {
          this.setState({ userData: res.data })
        }
      })
      .catch((err) => {
        console.log(err);
      })


    axios.get(`http://localhost:3003/issueBooks/`)
      .then((res) => {
        if (res.status == 200) {
          this.setState({ issueBookData: res.data })
          console.log("this.state", this.state);
        }
      })
      .catch((err) => {
        console.log(err);
      })

  }

  goToLibraryBooks() {
    this.props.history.push("/dashboard/library-books");
  }

  goToLibraryMembers() {
    this.props.history.push("/dashboard/library-members");
  }

  goToIssueReturnBooks() {
    this.props.history.push("/dashboard/issue-returns");
  }

  render() {
    return (
      <div className="DashboardHome">
        <div className="HomeItem" onClick={this.goToLibraryBooks}>
          <div className="ItemName">
            Books
          </div>
          <div className="ItemCount">
            {this.state.bookData.length}
          </div>
        </div>
        <div className="HomeItem" onClick={this.goToLibraryMembers}>
          <div className="ItemName">
            Library Members
          </div>
          <div className="ItemCount">
            {this.state.userData.length}
          </div>
        </div>
        <div className="HomeItem" onClick={this.goToIssueReturnBooks}>
          <div className="ItemName">
            Issued Books
          </div>
          <div className="ItemCount">
            {this.state.issueBookData.length}
          </div>
        </div>
      </div>
    )
  }

}

export default DashboardHome;
