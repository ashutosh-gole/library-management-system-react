import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import axios from "axios";

import '../css/BooksPage.css';

class BooksPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
    
    // this.logout = this.logout.bind(this);
    // this.goToDashboard = this.goToDashboard.bind(this);
    // this.goToBooks = this.goToBooks.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:3003/books/`)
      .then((res) => {
        if (res.status == 200) {
          this.setState({ books: res.data })
          console.log("this.state.books", this.state.books)
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
  render() {
    return (
      <div className="BooksPage">
        {
          this.state.books.map((book) => (
            <div className="Book">
              <div className="BookTitle">
                {book.title}
              </div>
              <div className="BookContent">
                <div className="BookImg">
                  <img src={book.thumbnailUrl}></img>
                </div>
                <div className="BookInfo">
                  <div className="BookShortDescription">
                    {book.shortDescription}
                  </div>
                  <div>
                    ISBN - {book.isbn}
                  </div>
                  <div>
                    Authors - {book.authors.map((author) => (
                    <i>{author},</i>
                  )
                  )}
                  </div>
                </div>
              </div>
            </div>
          )
          )
        }
      </div>
    );
  }
}

export default BooksPage;