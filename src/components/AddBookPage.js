import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import '../css/AddBookPage.css';

class AddBookPage extends Component {
  constructor() {
    super();

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

    console.log('The form was submitted with the following data:');
    console.log(this.state);

    let book = this.state;

    axios.post("http://localhost:3003/books", book).then((result) => {
      if (result) {
        alert("Book Addedd Successfully");
        // this.props.history.push("/dashboard/books");
      }
    }).catch(error => {
      console.log('Error');
    });
  }

  render() {
    return (
      <div className="AddBookPage">
        <form onSubmit={this.handleSubmit} className="FormFields">
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
            <button className="FormField__Button mr-20">Add Book</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddBookPage;
