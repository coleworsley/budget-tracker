import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Wrapper from './Wrapper';
import Modal from '../HigherOrder/Modal';
import './Login.css';

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

  render() {
    const { email, password, page, confirmPassword } = this.state;

    return (
      <div className="login">
        <h1 className="login__title">{page}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="input-box">
            <label htmlFor="email" className="input-label">
              Enter your Email
            </label>
            <input
              autoComplete="email"
              className="input"
              type="text"
              placeholder="Email"
              value={email}
              onChange={this.handleInput}
              name="email"
            />
          </div>

          <div className="input-box">
            <label htmlFor="password" className="input-label">
              Enter your Password
            </label>
            <input
              autoComplete="current-password"
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.handleInput}
              name="password"
            />
          </div>

          {page === 'Sign Up' ? (
            <div className="input-box">
              <label htmlFor="password" className="input-label">
                Re-Enter your Password
              </label>
              <input
                autoComplete="new-password"
                className="input"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={this.handleInput}
                name="confirmPassword"
              />
            </div>
          ) : null}

          <div className="btn-box">
            <button className="input-btn" onClick={this.handleClick}>
              {page === 'Login' ? 'Sign Up' : 'Login'}
            </button>

            <button className="input-btn" type="submit">
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

export default Modal(connect(mapStateToProps, mapDispatchToProps)(Login));
