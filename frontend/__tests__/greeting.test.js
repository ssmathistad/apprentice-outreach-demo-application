import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { expect as chaiExpect } from 'chai';

import Greeting from '../src/components/Greeting';
import App from '../src/App';

Enzyme.configure({adapter: new Adapter()});

test('Greeting component is rendered with app', () => {
  const wrapper = Enzyme.mount(
    <App />
  );

  chaiExpect(wrapper.find(Greeting)).to.have.lengthOf(1);
});

test('Text box accepts input from user', () => {
  const wrapper = Enzyme.mount(
    <Greeting />
  );

  // Simulate user entry into text box
  const r = wrapper.find("#userInput");
  r.simulate('change', { target: { value: "anything" }});

  const textBox = wrapper.state('input');
  expect(textBox).not.toBe("");
});

test('Submit button grabs secret from backend', () => {
  const wrapper = Enzyme.mount(
    <Greeting />
  );

  wrapper.setState({input: "anything"});

  // Simulate submit button click
  const btn = wrapper.find('form');
  const pr = btn.simulate('submit');
  console.log(pr);

  // jest.runAllTimers();

  const result = wrapper.find('#decryptedResult');
  console.log('result: ' + result.text());
  console.log('secret: ' + wrapper.state('secret'));
  console.log('input: ' + wrapper.state('input'));
  expect(result.text()).not.toBe("");
});
