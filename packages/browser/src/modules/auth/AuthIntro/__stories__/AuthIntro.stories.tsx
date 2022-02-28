import React from 'react';
import { ComponentMeta } from '@storybook/react';

import AuthIntro from 'modules/auth/AuthIntro';

export default {
  title: 'Views/Auth',
  component: AuthIntro,
} as ComponentMeta<typeof AuthIntro>;

export const Home = () => <AuthIntro />;
