import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Container from '@material-ui/core/Container';
import ProductBanner, { ProductBannerProps } from './ProductBanner';

export default {
  title: 'Home/ProductBanner',
  component: ProductBanner,
  argTypes: {
    onClick: {
      action: 'onClick',
    },
  },
} as Meta;

const Template: Story<ProductBannerProps> = (args) => (
  <Container maxWidth='lg'>
    <ProductBanner {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  images: [
    '/images/clothes/camiseta1.png',
    '/images/clothes/camiseta2.png',
    '/images/clothes/camiseta3.png',
  ],
  title: 'Camiseta básica preta TRIPLE-T',
};
