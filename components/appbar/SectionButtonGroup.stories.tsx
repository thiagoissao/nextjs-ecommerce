import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Container from '@material-ui/core/Container';
import SectionButtonGroup, { SectionButtonGroupProps } from './SectionButtonGroup';

export default {
  title: 'Appbar/SectionButtonGroup',
  component: SectionButtonGroup,
  argTypes: {
    onChange: {
      action: 'onChange',
    },
  },
} as Meta;

const Template: Story<SectionButtonGroupProps> = (args) => (
  <Container maxWidth='xs'>
    <SectionButtonGroup {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {};
