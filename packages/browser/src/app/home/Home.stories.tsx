import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Home from './Home';

export default {
  title: 'Views/Home',
  component: Home
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = args => <Home {...args} />;

export const Primary = Template.bind({});
