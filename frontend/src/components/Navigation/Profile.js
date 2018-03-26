import { connect } from 'react-redux';
import React, { Component } from 'react';
import { generateToken } from '../../actions';
import './Profile.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      test: 'test'
    };
  }

  render() {
    let content =
      this.props.token.length === 0 ? (
        <div>
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      ) : (
        <div>
          <h2>Cole Worsley</h2>
        </div>
      );

    return content;
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
