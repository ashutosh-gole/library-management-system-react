import React, { Component } from 'react';

class NotFoundPage extends Component {
  render() {
    return (
      <div className="FormCenter">
        <h1>Oops!</h1>
        <h4>404 Not Found</h4>
        <h6>Sorry, an error has occured, Requested page not found!</h6>
      </div>
    );
  }
}

export default NotFoundPage;