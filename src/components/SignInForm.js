import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loggedIn: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);
    const { email, password } = this.state;
    console.log(email);
    console.log(password);
    if (email == "asg@gmail.com" && password == "123456") {

      
      this.setState({
        loggedIn: true
      });
    }

  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" />
    }
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button> <Link to="/main/sign-up" className="FormField__Link">Create an account</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
