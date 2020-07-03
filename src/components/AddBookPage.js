import React, { Component } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import '../css/AddBookPage.css';

class AddBookPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      isbn: '',
      pageCount: '',
      thumbnailUrl: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
      publishedDate: {
        "$date": "2008-01-01T00:00:00.000-0800"
      },
      shortDescription: '',
      longDescription: '',
      status: "PUBLISH",
      authors: [
        "Yashwant Kanetkar"
      ],
      categories: [
        "System Software Development"
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToLibraryBooks = this.goToLibraryBooks.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let book = this.state;

    axios.post("http://localhost:3003/books", book)
      .then((res) => {
        if (res.status == 201) {
          toast.success("Book Added Successfully !", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  goToLibraryBooks() {
    this.props.history.push("/dashboard/library-books");
  }

  render() {
    return (
      <div className="AddBookPage">
        <form className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="title">Title</label>
            <input type="text" id="title" className="FormField__Input" placeholder="Enter book title" name="title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="isbn">ISBN</label>
            <input type="text" id="isbn" className="FormField__Input" placeholder="Enter book isbn" name="isbn" value={this.state.isbn} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="pageCount">Page Count</label>
            <input type="text" id="pageCount" className="FormField__Input" placeholder="Enter pageCount" name="pageCount" value={this.state.pageCount} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="shortDescription">Short Description</label>
            <input type="text" id="shortDescription" className="FormField__Input" placeholder="Enter Short Description" name="shortDescription" value={this.state.shortDescription} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="longDescription">Long Description</label>
            <input type="text" id="longDescription" className="FormField__Input" placeholder="Enter Long Description" name="longDescription" value={this.state.longDescription} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <button className="GoToButton mr-20" onClick={this.handleSubmit}>Add Book</button>
            <button className="GoToButton mr-20" onClick={this.goToLibraryBooks}>Go To Library Books</button>
          </div>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default AddBookPage;