import React, { Component } from 'react';
import axios from "axios";

import '../css/BookDetailsPage.css';

class BookDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {}
    };

    this.getBookData = this.getBookData.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getBookData(id);
  }

  getBookData(id) {
    axios.get(`http://localhost:3003/books/${id}`)
      .then((res) => {
        if (res.status == 200) {
          this.setState({ book: res.data })
          console.log("this.state.book", this.state.book)
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="BookDetailsPage">
        <h1>Book Details Page</h1>
      </div>
    );
  }
}

export default BookDetailsPage;