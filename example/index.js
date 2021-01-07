import React from 'react';
import ReactDOM from 'react-dom';
import GitHubLogin from '../src/GitHubLogin';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

ReactDOM.render(
  <GitHubLogin clientId=""
    redirectUri=""
    host="https://git.generalassemb.ly"
    onSuccess={onSuccess}
    onFailure={onFailure}/>,
  document.getElementById('example')
);
