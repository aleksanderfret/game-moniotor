import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button } from 'ui/Button';
import { ButtonProps } from 'ui/Button/types';

export default {
  title: 'UI/Button',
  component: Button,
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
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = args => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = { secondary: true };

export const Danger = Template.bind({});
Danger.args = { danger: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = { disabled: true, secondary: true };

export const Small = Template.bind({});
Small.args = { size: 'small' };

export const Medium = Template.bind({});
Medium.args = { size: 'medium' };

export const Big = Template.bind({});
Big.args = { size: 'large' };
