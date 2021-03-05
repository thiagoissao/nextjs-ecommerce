import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Title, { TitleProps } from './Title';

export default {
  title: 'Pure/Title',
  component: Title,
} as Meta;

const Template: Story<TitleProps> = (args) =>
  <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Lançamento',
};
