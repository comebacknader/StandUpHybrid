import React from 'react';
import renderer from 'react-test-renderer';
import Impression from '../Impression';

it('<Impression /> renders correctly', () => {
  const tree = renderer.create(<Impression />).toJSON();
  expect(tree).toMatchSnapshot();
});