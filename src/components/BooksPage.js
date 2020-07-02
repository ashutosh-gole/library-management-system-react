import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tooltip from '@material-ui/core/Tooltip';

import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import '../css/BooksPage.css';


class BooksPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };

    this.getData = this.getData.bind(this);
    this.editBook = this.editBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.goToBookDetailsPage = this.goToBookDetailsPage.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get(`http://localhost:3003/books/`)
      .then((res) => {
        if (res.status == 200) {
          this.setState({ books: res.data })
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

  goToBookDetailsPage(id) {
    this.props.history.push(`/dashboard/book/${id}`);
  }

  render() {
    return (
      <div className="BooksPage">
        {
          this.state.books.map((book) => (
            <div key={book.id} className="Book">
              <div className="BookHeader">
                <div className="BookTitle">{book.title}</div>
                <div>
                  <button className="EditButton mr-20" onClick={() => this.editBook(book)}>Edit</button>
                  <button className="DeleteButton mr-20" onClick={() => this.deleteBook(book.id)}>Delete</button>
                </div>
              </div>
              <Tooltip title="Go To Book Details" aria-label="Go To Book Details" placement="left" arrow>
                <div className="BookContent" onClick={() => this.goToBookDetailsPage(book.id)}>
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
              </Tooltip>
            </div>
          )
          )
        }
        <ToastContainer />
      </div>
    );
  }
}

export default BooksPage;