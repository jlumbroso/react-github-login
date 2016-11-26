import React from 'react';
import GitHubLogin from '../GitHubLogin.js';
import PopupWindow from '../PopupWindow.js';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('Renders defaults', () => {
  const component = renderer.create(
    <GitHubLogin clientId="foo" redirectUri="http://foo.test/auth/github"/>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('Renders with `className`', () => {
  const component = renderer.create(
    <GitHubLogin clientId="foo" redirectUri="http://foo.test/auth/github" className="foobar"/>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('Renders with `buttonText`', () => {
  const component = renderer.create(
    <GitHubLogin clientId="foo" redirectUri="http://foo.test/auth/github" buttonText="Foo"/>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('Opens OAuth dialog', () => {
  const clientId = 'foo';
  const redirectUri = 'http://foo.test/auth/github';

  const component = (
    <GitHubLogin clientId={clientId} redirectUri={redirectUri}/>
  );
  const wrapper = shallow(component);

  wrapper.find('button').simulate('click');

  const query = `client_id=${clientId}&scope=user:email&redirect_uri=${redirectUri}`

  expect(wrapper.instance().popup.url).toBe(
    `https://github.com/login/oauth/authorize?${query}`
  );
});
