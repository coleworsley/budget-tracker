import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateToken } from './actions';
import { Route } from 'react-router';

import PlaidLink from './containers/PlaidLink/Loadable'
import Navigation from './components/Navigation';
import Login from './components/Login';
import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Login />
        <PlaidLink />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
