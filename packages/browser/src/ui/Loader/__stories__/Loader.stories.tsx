import React from 'react';
import { Meta, Story } from '@storybook/react';

import Loader, { LoaderProps } from 'ui/Loader';

export default {
  title: 'UI/Loader',
  component: Loader,
} as Meta<typeof Loader>;

const Template: Story<LoaderProps> = args => <Loader {...args} />;

export const Main = Template.bind({});
Main.args = {
  size: 'medium',
  color: 'main',
};

export const Contrast = Template.bind({});
Contrast.args = {
  size: 'medium',
  color: 'contrast',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  color: 'main',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  color: 'main',
};

export const Big = Template.bind({});
Big.args = {
  size: 'big',
  color: 'main',
};
