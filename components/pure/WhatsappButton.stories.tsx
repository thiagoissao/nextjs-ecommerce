import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Container from '@material-ui/core/Container';
import WhatsappButton, { WhatsappButtonProps } from './WhatsappButton';

export default {
  title: 'Pure/WhatsappButton',
  component: WhatsappButton,
} as Meta;

const Template: Story<WhatsappButtonProps> = (args) => (
  <Container maxWidth='xs'>
    <WhatsappButton {...args}>
      Quero Comprar
    </WhatsappButton>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  href: '/',
};
