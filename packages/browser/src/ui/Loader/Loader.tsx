import React, { FC } from 'react';
import clsx from 'clsx';

import LoaderDot from './LoaderDot';
import LoaderBox from './LoaderBox';

const dots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type LoaderSize = 'small' | 'medium' | 'big';
type LoaderColor = 'main' | 'contrast';
export interface LoaderProps {
  size?: LoaderSize;
  color?: LoaderColor;
}

const Loader: FC<LoaderProps> = ({ size = 'medium', color = 'main' }) => {
  const boxClasses = clsx({
    small: size === 'small',
    medium: size === 'medium',
    big: size === 'big'
  });

  const dotClasses = clsx({
    main: color === 'main',
    contrast: color === 'contrast'
  });

  return (
    <LoaderBox className={boxClasses} role="progressbar">
      {dots.map((dot: number) => (
        <LoaderDot
          className={dotClasses}
          data-testid={`loader-dot-${dot}`}
          key={dot}
        />
      ))}
    </LoaderBox>
  );
};

export default Loader;
