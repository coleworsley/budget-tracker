import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import './Navigation.css';

const initialState = {
  page: 'Login',
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: ''
};

class Login extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick() {
    const { page } = this.state;
    this.setState({
      page: page === 'Login' ? 'Sign Up' : 'Login'
    });
  }

  renderConditionalName() {
    const { page, email, password } = this.state;

    if (page === 'Sign Up') {
      return (
        <div className="login__name">
          <label htmlFor="email">First Name</label>
          <input
            autoComplete="given-name"
            className="login__input"
            type="text"
            placeholder="First Name"
            value={email}
            onChange={this.handleInput}
            name="firstName"
          />

          <label htmlFor="password">Last Name</label>
          <input
            autoComplete="family-name"
            className="login__input"
            type="password"
            placeholder="Last Name"
            value={password}
            onChange={this.handleInput}
            name="lastName"
          />
        </div>
      );
    }
  }

  renderConditionalPassword() {
    const { page, confirmPassword } = this.state;

    if (page === 'Sign Up') {
      return (
        <div>
          <label htmlFor="password">Re-Enter your Password</label>
          <input
            autoComplete="new-password"
            className="login__input"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={this.handleInput}
            name="confirmPassword"
          />
        </div>
      );
    }
  }

  render() {
    const { email, password, page } = this.state;

    return (
      <div>
        <h1 className="login__title">{page}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderConditionalName()}

          <label htmlFor="email">Enter your Email</label>
          <input
            autoComplete="email"
            className="login__input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={this.handleInput}
            name="email"
          />

          <label htmlFor="password">Enter your Password</label>
          <input
            className="login__input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.handleInput}
            name="password"
          />

          {this.renderConditionalPassword()}

          <div className="login__buttons">
            <button className="login__input-btn" onClick={this.handleClick}>
              {page === 'Login' ? 'Sign Up' : 'Login'}
            </button>

            <button className="login__input-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
