import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import Login from './components/Login';
import { generateToken } from './actions';
import React, { Component } from 'react';
import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Login />
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
