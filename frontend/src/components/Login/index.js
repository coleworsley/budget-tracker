import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const initialState = { showDropDown: false };

class Login extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ showDropDown: !this.state.showDropDown });
  }

  render() {
    return (
      <div>
        your code here
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
  };
};

const mapStateToProps = state => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
