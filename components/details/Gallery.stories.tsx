import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Container from '@material-ui/core/Container';
import Gallery, { GalleryProps } from './Gallery';

export default {
  title: 'Details/Gallery',
  component: Gallery,
} as Meta;

const Template: Story<GalleryProps> = args => (
  <Container maxWidth='lg' disableGutters>
    <Gallery {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  images: [
    '/images/clothes/camiseta1.png',
    '/images/clothes/camiseta2.png',
    '/images/clothes/camiseta3.png',
    '/images/clothes/camiseta4.png',
    '/images/clothes/camiseta5.png',
    '/images/clothes/camiseta6.png',
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  images: [],
};
