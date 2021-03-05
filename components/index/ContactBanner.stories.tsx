import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Container from '@material-ui/core/Container';
import ContactBanner from './ContactBanner';

export default {
  title: 'Home/ContactBanner',
  component: ContactBanner,
} as Meta;

const Template: Story = (args) => (
  <Container maxWidth='lg'>
    <ContactBanner {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {};
