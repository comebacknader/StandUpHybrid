import React from 'react';
import renderer from 'react-test-renderer';
import MobileApplication from '../MobileApplication';

it('MobileApplication renders correctly', () => {
  const tree = renderer.create(<MobileApplication />).toJSON();
  expect(tree).toMatchSnapshot();
});