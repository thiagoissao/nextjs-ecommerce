import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Container from '@material-ui/core/Container';
import SustainabilityBanner from './SustainabilityBanner';

export default {
  title: 'Generic/SustainabilityBanner',
  component: SustainabilityBanner,
} as Meta;

const Template: Story = args => (
  <Container maxWidth='xl'>
    <SustainabilityBanner {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {};
