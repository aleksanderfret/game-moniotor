import React from 'react';
import { Meta, Story } from '@storybook/react';

import Loader, { LoaderProps } from 'ui/Loader';

export default {
  title: 'UI/Loader',
  component: Loader
} as Meta<typeof Loader>;

const Template: Story<LoaderProps> = args => <Loader {...args} />;

export const Main = Template.bind({});
Main.args = {
  size: 'md',
  color: 'main'
};

export const Contrast = Template.bind({});
Contrast.args = {
  size: 'md',
  color: 'contrast'
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  color: 'main'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  color: 'main'
};

export const Big = Template.bind({});
Big.args = {
  size: 'xl',
  color: 'main'
};
