import React from 'react';
import { ComponentMeta } from '@storybook/react';

import TileComponent from '../Tile';

export default {
  component: TileComponent,
  title: 'UI/Tile'
} as ComponentMeta<typeof TileComponent>;

export const Tile = () => <TileComponent />;
