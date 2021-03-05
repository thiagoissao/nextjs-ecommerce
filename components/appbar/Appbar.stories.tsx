import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Appbar, { AppbarProps } from './Appbar';

export default {
  title: 'Appbar/Appbar',
  component: Appbar,
  argTypes: {
    onChange: {
      action: 'onChange',
    },
  },
} as Meta;

const Template: Story<AppbarProps> = (args) =>
  <Appbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
