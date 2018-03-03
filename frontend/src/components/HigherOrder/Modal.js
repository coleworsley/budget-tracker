import React, { Component } from 'react';

const Modal = WrappedComponent => {
  return class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.handleClickOutside = this.handleClickOutside.bind(this);
      this.toggleView = this.toggleView.bind(this);
      this.state = { hidden: false };
    }

    handleClickOutside(e) {
      const { node, state: { hidden } } = this;

      if (node && !hidden && !node.contains(e.target)) {
        console.log('clicked outside');

        this.setState({ hidden: false });
      }
    }

    componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }

    toggleView() {
      this.setState({ hidden: false });
    }

    render() {
      return (
        <div
          className="modal"
          ref={node => {
            this.node = node;
          }}
        >
          <WrappedComponent {...this.props} toggleView={this.toggle} />
          <button>Close</button>
        </div>
      );
    }
  };
};

export default Modal;
