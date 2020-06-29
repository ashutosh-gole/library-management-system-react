import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import axios from "axios";

import '../css/BooksPage.css';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

class BooksPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };

    this.getData = this.getData.bind(this);
    this.editBook = this.editBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
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

  editBook(book) {

  }

  deleteBook(id) {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.deleteSelectedBook(id)
        },
        {
          label: 'No'
        }
      ],
      closeOnEscape: true,
      closeOnClickOutside: false,
      willUnmount: () => { },
      afterClose: () => { },
      onClickOutside: () => { },
      onKeypressEscape: () => { }
    });
  }

  deleteSelectedBook(id) {
    console.log("deleteBook click id = ", id);

    axios.delete(`http://localhost:3003/books/${id}`)
      .then((res) => {
        if (res.status == 200) {
          this.getData();
          toast.success("Book Deleted Successfully !", {
            position: toast.POSITION.BOTTOM_CENTER
          });
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
              <div className="BookHeader">
                <div className="BookTitle">{book.title}</div>
                <div>
                  <button className="EditButton mr-20" onClick={() => this.editBook(book)}>Edit</button>
                  <button className="DeleteButton mr-20" onClick={() => this.deleteBook(book.id)}>Delete</button>
                </div>
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