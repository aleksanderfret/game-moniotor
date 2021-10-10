import React, { FC } from 'react';

import { useAppState } from 'hooks';
import Content from './Content';
import Intro from './Intro';
import Page from 'ui/Page';

const ContentController: FC = () => {
  const { isAuthenticated } = useAppState();

  return <Page>{!isAuthenticated ? <Content /> : <Intro />}</Page>;
};

export default ContentController;
