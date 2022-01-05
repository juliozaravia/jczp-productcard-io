import React from 'react';
import renderer from 'react-test-renderer';

import { ProductTitle, ProductCard } from '../..';

const product1 = {
  id: '1',
  title: 'Coffee Mug - No image',
};

describe('ProductTitle', () => {
  test('It should show the component correctly', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom product" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('It should show the component with the product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
