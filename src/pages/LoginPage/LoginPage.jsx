import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import './LoginPage.css'

class LoginPage extends Component {
  state = {
    email: "",
    pw: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/myfood");
    } catch (err) {
      alert("Invalid Credentials!");
    }
  };

  render() {
    return (
      <div className='container-fluid'>
        <div className='row row-sm align-items-end'>
          <div className='col-12 title'>FOOD SAVER</div>
        </div>
        <div className="row row-lg align-items-center loginpage">
          <div className='col-4' />
          <form className='col-4' onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Password"
                value={this.state.pw}
                name="pw"
                onChange={this.handleChange}
              />
            </div>
            <div className="buttons">
              <button className="btn btn-success">Log In</button>
              <Link className="btn btn-outline-dark" to="/">Cancel</Link>
            </div>
          </form>
          <div className='col-4' />
        </div>
      </div>
    );
  }
}

export default LoginPage;