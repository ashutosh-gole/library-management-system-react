import React, { Component } from 'react';
import axios from "axios";
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';

import '../css/BookDetailsPage.css';

class BookDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {},
      authors: [],
      categories: []
    };

    this.getBookData = this.getBookData.bind(this);
    this.goToLibraryBooks = this.goToLibraryBooks.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getBookData(id);
  }

  getBookData(id) {
    axios.get(`http://localhost:3003/books/${id}`)
      .then((res) => {
        if (res.status == 200) {
          this.setState({
            book: res.data,
            authors: res.data.authors,
            categories: res.data.categories
          })
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  goToLibraryBooks() {
    this.props.history.push("/dashboard/library-books");
  }

  render() {
    return (
      <div className="BookDetailsPage">
        <div className="HeaderData">
          <div className="HeaderIcon">
            <Tooltip title="Library Books" aria-label="library books" placement="right" arrow>
              <Icon style={{ color: 'black', fontSize: 60, cursor: 'pointer' }} onClick={this.goToLibraryBooks}>keyboard_backspace</Icon>
            </Tooltip>
          </div>
          <div className="PageHeader">Book Details Page</div>
        </div>
        <div className="BookData">
          <div className="BookImageData">
            <img className="BookImage" src={this.state.book.thumbnailUrl}></img>
            <div className="BookTitle">{this.state.book.title}</div>
          </div>
          <div className="BookInfoData">
            <div className="BookInfoDataItem">
              <span className="ItemName">Authors : </span>
              {this.state.authors.map((author) => (
                <i>{author},</i>
              )
              )}
            </div>
            <div className="BookInfoDataItem">
              <span className="ItemName">Categories : </span>
              {this.state.categories.map((categorie) => (
                <i>{categorie},</i>
              )
              )}
            </div>
            <div className="BookInfoDataItem">
              <span className="ItemName">ISBN : </span>
              {this.state.book.isbn}
            </div>
            <div className="BookInfoDataItem">
              <span className="ItemName">Page Count : </span>
              {this.state.book.pageCount}
            </div>
            <div className="BookInfoDataItem">
              <span className="ItemName">Status : </span>
              {this.state.book.status}
            </div>
            <div className="BookInfoDataItem">
              <span className="ItemName">Published Date : </span>
              {this.state.book.publishedDate}
            </div>
          </div>
          <div className="BookLongDescription">
            <span>
              <span className="ItemName">Description : </span>
              {this.state.book.shortDescription}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default BookDetailsPage;