# React GitHub Login

![CircleCI](https://circleci.com/gh/checkr/react-github-login.svg?style=shield&circle-token=493b950057f69e68ac8698a9ee189b2132a296e4)

React component for [GitHub login](https://developer.github.com/v3/oauth/).

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import GitHubLogin from 'react-github-login';

const onSuccess = response => console.log(response);
const onError = response => console.error(response);

ReactDOM.render(
  <GitHubLogin clientId="ac56fad434a3a3c1561e"
    redirectUri="http://domain.test/auth/github"
    onSuccess={onSuccess}
    onError={onError}/>,
  document.getElementById('example')
);
```

### Props

#### `clientId`

`{string}` _required_

Client ID for GitHub OAuth application.

#### `redirectUri`

`{string}` _required_

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

#### `onSuccess`

`{function}`

Callback for successful login. An object will be passed as an argument to the callback, e.g. `{ "code": "..." }`.

#### `onError`

`{function}`

Callback for errors raised during login.


## Development

```sh
$ npm start
```

Webpack development server starts at [http://localhost:8080](http://localhost:8080), loading [example/index.html](github.com/checkr/react-facebook-login/tree/master/example/index.html).
