import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonProps } from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Button from './Button';

export default {
  title: 'Pure/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Container maxWidth='sm'>
    <Button {...args}>Button</Button>
  </Container>
);

export const Primary = Template.bind({});
Primary.args = {};
