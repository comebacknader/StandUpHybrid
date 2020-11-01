import React from 'react';
import renderer from 'react-test-renderer';
import Microphone from '../Microphone';

it('Microphone renders correctly', () => {
  const tree = renderer.create(<Microphone />).toJSON();
  expect(tree).toMatchSnapshot();
});