import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '../HigherOrder/Modal';
import InputBox from '../General/InputBox';
import './index.css';

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
          <InputBox
            {...{
              label: 'Enter your email',
              placeholder: 'Email',
              autoComplete: 'email',
              type: 'text',
              name: 'email',
              value: email,
              onChange: this.handleInput,
              display: 'block'
            }}
          />
          <InputBox
            {...{
              label: 'Enter your Password',
              placeholder: 'Email',
              autoComplete: 'current-password',
              type: 'password',
              name: 'password',
              value: password,
              onChange: this.handleInput,
              display: 'block'
            }}
          />
          <InputBox
            {...{
              label: 'Re-Enter your Password',
              placeholder: 'Email',
              autoComplete: 'current-password',
              type: 'password',
              name: 'confirmPassword',
              value: confirmPassword,
              onChange: this.handleInput,
              display: page === 'Sign Up' ? 'block' : 'none'
            }}
          />

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
