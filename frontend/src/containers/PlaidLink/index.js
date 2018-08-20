import React from 'react';
import Script from 'react-load-script';
import PropTypes from 'prop-types';

export default class Plaid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledButton: true,
      linkLoaded: false,
      url: 'https://cdn.plaid.com/link/v2/stable/link-initialize.js',
    };

    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  static defaultProps = {
    apiVersion: 'v2',
    env: 'sandbox',
    institution: null,
    selectAccount: false,
    token: null,
    style: {
      padding: '6px 4px',
      outline: 'none',
      background: '#FFFFFF',
      border: '2px solid #F1F1F1',
      borderRadius: '4px',
    },
  };

  onScriptLoad() {
    window.handler = window.Plaid.create({
      apiVersion: this.props.apiVersion,
      clientName: this.props.clientName,
      env: this.props.env,
      key: this.props.publicKey,
      onExit: this.props.onExit,
      onLoad: this.handleLinkOnLoad,
      onEvent: this.props.onEvent,
      onSuccess: this.props.onSuccess,
      product: this.props.product,
      selectAccount: this.props.selectAccount,
      token: this.props.token,
      webhook: this.props.webhook,
    });
  }

  static propTypes = {
    apiVersion: PropTypes.string,
    clientName: PropTypes.string.isRequired,
    env: PropTypes.oneOf(['sandbox', 'development', 'production']),
    institution: PropTypes.string,
    publicKey: PropTypes.string.isRequired,
    product: PropTypes.arrayOf(
      PropTypes.oneOf(['auth', 'identity', 'income', 'transactions']),
    ).isRequired,
    token: PropTypes.string,
    selectAccount: PropTypes.bool,
    webhook: PropTypes.string,
    onSuccess: PropTypes.func.isRequired,
    onExit: PropTypes.func,
    onLoad: PropTypes.func,
    onEvent: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string,
  }

  render() {
    return (
      <div>
        <Script
          url={this.state.url}
          onError={error => console.log(error)}
          onLoad={this.onScriptLoad}
        />
      </div>
    );
  }
}
