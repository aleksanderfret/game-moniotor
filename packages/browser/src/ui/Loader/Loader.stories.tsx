import React from 'react';
import { Meta, Story } from '@storybook/react';

import Loader, { LoaderProps } from './Loader';

export default {
  title: 'UI/Loader',
  component: Loader
} as Meta<typeof Loader>;

const Template: Story<LoaderProps> = args => <Loader {...args} />;

export const SmallMain = Template.bind({});
SmallMain.args = {
  size: 'md',
  color: 'main'
};

export const SmallLight = Template.bind({});
SmallLight.args = {
  size: 'md',
  color: 'light'
};

export const SmallDark = Template.bind({});
SmallDark.args = {
  size: 'md',
  color: 'dark'
};

export const SmallContrast = Template.bind({});
SmallContrast.args = {
  size: 'md',
  color: 'contrast'
};

export const BigMain = Template.bind({});
BigMain.args = {
  size: 'xl',
  color: 'main'
};

export const BigLight = Template.bind({});
BigLight.args = {
  size: 'xl',
  color: 'light'
};

export const BigDark = Template.bind({});
BigDark.args = {
  size: 'xl',
  color: 'dark'
};

export const BigContrast = Template.bind({});
BigContrast.args = {
  size: 'xl',
  color: 'contrast'
};
