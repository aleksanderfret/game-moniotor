import React, { FC } from 'react';

import LoaderDot, { LoaderColor } from './LoaderDot';
import LoaderBox, { LoaderSize } from './LoaderBox';

const dots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export interface LoaderProps {
  size?: LoaderSize;
  color?: LoaderColor;
}

const Loader: FC<LoaderProps> = ({ size = 'md', color = 'main' }) => (
  <LoaderBox role="progressbar" size={size}>
    {dots.map((dot: number) => (
      <LoaderDot color={color} data-testid={`loader-dot-${dot}`} key={dot} />
    ))}
  </LoaderBox>
);

export default Loader;
