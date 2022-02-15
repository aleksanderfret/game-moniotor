import React from 'react';
import { Meta, Story } from '@storybook/react';

import { AsyncButton } from 'ui/Button';
import { ButtonProps } from 'ui/Button/types';

export default {
  title: 'UI/AsyncButton',
  component: AsyncButton,
  args: {
    danger: false,
    disabled: false,
    loading: false,
    onClick: () => alert('button clicked'),
    secondary: false,
    size: 'medium',
    title: '',
    type: 'button',
  },
} as Meta<typeof AsyncButton>;

const Template: Story<ButtonProps> = args => (
  <AsyncButton {...args}>Async button</AsyncButton>
);

export const Primary = Template.bind({});
Primary.args = {
  loading: true,
  size: 'medium',
};

export const Danger = Template.bind({});
Danger.args = {
  danger: true,
  loading: true,
  size: 'medium',
};

export const Secondary = Template.bind({});
Secondary.args = {
  loading: true,
  secondary: true,
  size: 'medium',
};
