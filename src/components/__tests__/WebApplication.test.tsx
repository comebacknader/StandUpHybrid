import React from 'react';
import renderer from 'react-test-renderer';
import WebApplication from '../WebApplication';

it('WebApplication renders correctly', () => {
  const tree = renderer.create(<WebApplication />).toJSON();
  expect(tree).toMatchSnapshot();
});