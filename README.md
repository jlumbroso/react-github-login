This is a forked of [react-github-login](https://github.com/checkr/react-github-login) since the project seems to be abandoned.

# React GitHub Login

![NPM](https://img.shields.io/npm/v/react-login-github.svg?style=flat)
![CircleCI](https://circleci.com/gh/rlamana/react-login-github.svg?style=shield&circle-token=493b950057f69e68ac8698a9ee189b2132a296e4)

React component for [GitHub Login](https://developer.github.com/v3/oauth/).

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import LoginGithub from 'react-login-github';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

ReactDOM.render(
  <LoginGithub clientId="ac56fad434a3a3c1561e"
    onSuccess={onSuccess}
    onFailure={onFailure}/>,
  document.getElementById('example')
);
```

### Props

#### `clientId`

`{string}` _required_

Client ID for GitHub OAuth application.

#### `redirectUri`

`{string}`

Registered redirect URI for GitHub OAuth application.

#### `scope`

`{string}`

Scope for GitHub OAuth application. Defaults to `user:email`.

#### `className`

`{string}`

CSS class for the login button.

#### `buttonText`

`{string}`

Text content for the login button.

#### `onRequest`

`{function}`

Callback for every request.

#### `onSuccess`

`{function}`

Callback for successful login. An object will be passed as an argument to the callback, e.g. `{ "code": "..." }`.

#### `onFailure`

`{function}`

Callback for errors raised during login.


## Development

```sh
$ npm start
```
