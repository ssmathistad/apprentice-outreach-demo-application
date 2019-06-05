import React from 'react';
import { mount } from 'enzyme';
import Greeting from '../src/components/Greeting';

test('Submit button grabs secret from backend', () => {
  const wrapper = mount(
    <Greeting />
  );

  wrapper.setState({input: "anything"});
  const p = wrapper.find('#submitBtn');
  p.simulate('click');
  const r = wrapper.find('#decryptedResult')
  expect(r).not.toBe("");
});
