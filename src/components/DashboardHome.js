import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../css/DashboardHome.css'
import axios from "axios";

class DashboardHome extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div className="DashboardHome">
        <div className="HomeItem">
          <div className="ItemName">
            Books
          </div>
          <div className="ItemCount">
            {this.state.bookData.length}
          </div>
        </div>
        <div className="HomeItem">
          <div className="ItemName">
            Library Members
          </div>
          <div className="ItemCount">
            {this.state.userData.length}
          </div>
        </div>
        <div className="HomeItem">
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
