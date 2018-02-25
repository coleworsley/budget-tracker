import React, { Component } from 'react';

const Modal = WrappedComponent => {
  return class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.handleClickOutside = this.handleClickOutside.bind(this);
      this.toggleView = this.toggleView.bind(this);
      this.clickTest = this.clickTest.bind(this);
      this.state = { hidden: true };
    }

    handleClickOutside(e) {
      if (this.node && !this.node.contains(e.target)) {
        console.log('clicked outside');
        // this.setState({ hidden: true });
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
      const { hidden } = this.state;

      this.setState({ hidden: !hidden });
    }

    clickTest() {
      console.log('clicked');
    }

    render() {
      console.log(this);
      return (
        <div
          className="modal"
          ref={node => {
            this.node = node;
          }}
        >
          <WrappedComponent {...this.props} />
          <button>Close</button>
        </div>
      );
    }
  };
};

export default Modal;
