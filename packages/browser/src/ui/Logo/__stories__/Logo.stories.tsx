import React from 'react';
import { Meta, Story } from '@storybook/react';

import Logo, { LogoProps } from 'ui/Logo';

export default {
  title: 'UI/Logo',
  component: Logo,
} as Meta<typeof Logo>;

const Template: Story<LogoProps> = args => <Logo {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  size: 'medium',
  variant: 'simple',
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  size: 'medium',
  variant: 'horizontal',
};

export const Vertical = Template.bind({});
Vertical.args = {
  size: 'medium',
  variant: 'vertical',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  variant: 'vertical',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  variant: 'vertical',
};

export const Big = Template.bind({});
Big.args = {
  size: 'big',
  variant: 'vertical',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  variant: 'vertical',
};
