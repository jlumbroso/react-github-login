import React, { PropTypes, Component } from 'react';

import PopupWindow from './PopupWindow';
import { toQuery } from './utils';

class GitHubLogin extends Component {
  static propTypes = {
    buttonText: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    clientId: PropTypes.string.isRequired,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    redirectUri: PropTypes.string.isRequired,
    scope: PropTypes.string,
  }

  static defaultProps = {
    buttonText: 'Sign in with GitHub',
    scope: 'user:email',
    onSuccess: () => {},
    onError: () => {},
  }

  onBtnClick = () => {
    const { clientId, scope, redirectUri } = this.props;
    const search = toQuery({
      client_id: clientId,
      scope,
      redirect_uri: redirectUri,
    });
    const popup = this.popup = PopupWindow.open(
      'github-oauth-authorize',
      `https://github.com/login/oauth/authorize?${search}`,
      { height: 1000, width: 600 }
    );

    popup.then(
      data => this.onSuccess(data),
      error => this.onError(error)
    );
  }

  onSuccess = (data) => {
    if (!data.code) {
      return this.onError(new Error('\'code\' not found'));
    }

    this.props.onSuccess(data);
  }

  onError = (error) => {
    this.props.onError(error);
  }

  render() {
    const { className, buttonText, children } = this.props;

    return (
      <button className={className} onClick={this.onBtnClick}>
        { children || buttonText }
      </button>
    );
  }
}

export default GitHubLogin;
