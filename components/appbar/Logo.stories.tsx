import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Container from '@material-ui/core/Container';
import Logo from './Logo';

export default {
  title: 'Appbar/Logo',
  component: Logo,
} as Meta;

const Template: Story = (args) => (
  <Container maxWidth='xs'>
    <Logo {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {};
