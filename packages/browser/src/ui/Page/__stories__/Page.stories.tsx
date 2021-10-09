import React from 'react';
import { ComponentMeta } from '@storybook/react';

import PageComponent from '../Page';

export default {
  component: PageComponent,
  title: 'UI/Page'
} as ComponentMeta<typeof PageComponent>;

export const Page = () => <PageComponent />;
