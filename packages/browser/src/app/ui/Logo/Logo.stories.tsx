import React from 'react';
import { Meta, Story } from '@storybook/react';

import Logo, { LogoProps } from './Logo';

export default {
  title: 'UI/Logo',
  component: Logo
} as Meta<typeof Logo>;

const Template: Story<LogoProps> = args => <Logo {...args} />;

export const SmallSimple = Template.bind({});
SmallSimple.args = {
  size: 'small',
  variant: 'simple'
};

export const SmallHorizontal = Template.bind({});
SmallHorizontal.args = {
  size: 'small',
  variant: 'horizontal'
};

export const SmallVertical = Template.bind({});
SmallVertical.args = {
  size: 'small',
  variant: 'vertical'
};

export const MediumSimple = Template.bind({});
MediumSimple.args = {
  size: 'medium',
  variant: 'simple'
};

export const MediumHorizontal = Template.bind({});
MediumHorizontal.args = {
  size: 'medium',
  variant: 'horizontal'
};

export const MediumVertical = Template.bind({});
MediumVertical.args = {
  size: 'medium',
  variant: 'vertical'
};

export const BigSimple = Template.bind({});
BigSimple.args = {
  size: 'big',
  variant: 'simple'
};

export const BigHorizontal = Template.bind({});
BigHorizontal.args = {
  size: 'big',
  variant: 'horizontal'
};

export const BigVertical = Template.bind({});
BigVertical.args = {
  size: 'big',
  variant: 'vertical'
};

export const LargeSimple = Template.bind({});
LargeSimple.args = {
  size: 'large',
  variant: 'simple'
};

export const LargeHorizontal = Template.bind({});
LargeHorizontal.args = {
  size: 'large',
  variant: 'horizontal'
};

export const LargeVertical = Template.bind({});
LargeVertical.args = {
  size: 'large',
  variant: 'vertical'
};
