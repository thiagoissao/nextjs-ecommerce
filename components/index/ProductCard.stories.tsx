import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Container from '@material-ui/core/Container';
import ProductCard, { ProductCardProps } from './ProductCard';
import strings from '../../utils/strings';

export default {
  title: 'Home/ProductCard',
  component: ProductCard,
  argTypes: {
    onClick: {
      action: 'onClick',
    },
    onClickAddToCart: {
      action: 'onClick',
    },
    onClickFavorite: {
      action: 'onClick',
    },
  },
} as Meta;

const Template: Story<ProductCardProps> = (args) => (
  <Container maxWidth='xs'>
    <ProductCard {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  isFavorite: true,
  product: {
    title: `Moletom Preto Básico ${strings.appName}`,
    price: 150,
    description: 'Moletom',
    images: [
      '/images/clothes/camisa1.png',
    ],
  },
};

export const Overflow = Template.bind({});
Overflow.args = {
  isFavorite: false,
  product: {
    title: `Moletommmmm Pretooo Básicossss Moletommmmm Pretooo Básicossss Moletommmmm Pretooo Básicossss ${strings.appName}`,
    price: 230.60,
    description: 'Moletom',
    images: [
      '/images/clothes/camisa1.png',
    ],
  },
};

export const WithWhatsApp = Template.bind({});
WithWhatsApp.args = {
  withWhatsappButton: true,
  isFavorite: false,
  product: {
    title: `Moletom Preto Básico ${strings.appName}`,
    price: 230.60,
    description: 'Moletom',
    images: [
      '/images/clothes/camisa1.png',
    ],
  },
};
