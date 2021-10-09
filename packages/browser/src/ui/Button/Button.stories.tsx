import React from 'react';
import { Meta, Story } from '@storybook/react';

import Button from './Button';
import { ButtonProps } from './types';

export default {
  title: 'UI/Button',
  component: Button,
  args: {
    danger: false,
    disabled: false,
    label: 'Button',
    loading: false,
    onClick: () => alert('button clicked'),
    primary: true,
    secondary: false,
    size: 'medium',
    title: '',
    type: 'button'
  }
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = args => <Button {...args}>Button</Button>;

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  size: 'small'
};

export const PrimarySmallDanger = Template.bind({});
PrimarySmallDanger.args = {
  danger: true,
  size: 'small'
};

export const PrimarySmallDisabled = Template.bind({});
PrimarySmallDisabled.args = {
  disabled: true,
  size: 'small'
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  size: 'medium'
};

export const PrimaryMediumDanger = Template.bind({});
PrimaryMediumDanger.args = {
  danger: true,
  size: 'medium'
};

export const PrimaryMediumDisabled = Template.bind({});
PrimaryMediumDisabled.args = {
  disabled: true,
  size: 'medium'
};

export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
  size: 'big'
};

export const PrimaryBigDanger = Template.bind({});
PrimaryBigDanger.args = {
  danger: true,
  size: 'big'
};
export const PrimaryBigDisabled = Template.bind({});
PrimaryBigDisabled.args = {
  disabled: true,
  size: 'big'
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  primary: false,
  secondary: true,
  size: 'small'
};

export const SecondarySmallDisabled = Template.bind({});
SecondarySmallDisabled.args = {
  disabled: true,
  primary: false,
  secondary: true,
  size: 'small'
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  primary: false,
  secondary: true,
  size: 'medium'
};

export const SecondaryMediumDisabled = Template.bind({});
SecondaryMediumDisabled.args = {
  disabled: true,
  primary: false,
  secondary: true,
  size: 'medium'
};

export const SecondaryBig = Template.bind({});
SecondaryBig.args = {
  primary: false,
  secondary: true,
  size: 'big'
};

export const SecondaryBigDisabled = Template.bind({});
SecondaryBigDisabled.args = {
  disabled: true,
  primary: false,
  secondary: true,
  size: 'big'
};
