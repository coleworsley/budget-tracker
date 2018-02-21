import React, { Component } from 'react';
import { connect } from 'react-redux';

class Wrapper extends Component {
  constructor() {
    super();
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.state = { hidden: true };
  }

  handleClickOutside(e) {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.setState({ hidden: true });
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  toggleView() {
    console.log(toggleView);
    const { hidden } = this.state;

    this.setState({ hidden: !hidden });
  }

  render() {
    const { children } = this.props;

    const childrenWithProps = React.Children.map(children, child => {
      return React.cloneElement(child, {
        toggleView: this.toggleView
      });
    });
    return (
      <div className="wrapper" ref={this.setWrapperRef}>
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {
    token: state.view
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
