import React from 'react';
import { ComponentMeta } from '@storybook/react';

import HomeComponent from './Home';

export default {
  title: 'Views/Home',
  component: HomeComponent
} as ComponentMeta<typeof HomeComponent>;

export const Home = () => <HomeComponent />;
