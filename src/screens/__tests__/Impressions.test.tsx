import React from 'react';
import renderer from 'react-test-renderer';
import Impressions from '../Impressions';

it('<Impressions /> renders correctly', () => {
  const tree = renderer.create(<Impressions />).toJSON();
  expect(tree).toMatchSnapshot();
});