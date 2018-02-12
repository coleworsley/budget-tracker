import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { generateToken } from '../../actions';
import './Navigation.css';

const initialState = { showDropDown: false };

class Navigation extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ showDropDown: !this.state.showDropDown });
  }

  render() {
    console.log(this.props);

    return (
      <nav className="Navigation">
        <NavLink
          to="/"
          activeClassName="active"
          className="Navigation__title"
        >
          AppNameHere
        </NavLink>

        <button
          className="Navigation__dropdown"
          onClick={() => this.handleClick()}
          onBlur={() => this.setState(initialState)}
        >

        </button>

        <ul className="Navigation__list">
          <li>
            <NavLink to="/" activeClassName="active" className="Navigation__link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/route1" activeClassName="active" className="Navigation__link">
              Route1
            </NavLink>
          </li>
          <li>
            <NavLink to="/route2" activeClassName="active" className="Navigation__link">
              Route2
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    generateToken: () => dispatch(generateToken()),
  };
};

const mapStateToProps = state => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
