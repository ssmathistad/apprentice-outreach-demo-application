import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import Greeting from '../src/components/Greeting';

Enzyme.configure({adapter: new Adapter()});

test('Submit button grabs secret from backend', () => {
  const wrapper = Enzyme.mount(
    <Greeting />
  );

  wrapper.setState({input: "anything"});
  const p = wrapper.find('#submitBtn');
  p.simulate('click');
  const r = wrapper.find('#decryptedResult')
  expect(r).not.toBe("");
});
