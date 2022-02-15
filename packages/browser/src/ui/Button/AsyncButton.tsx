import React, { forwardRef, useState } from 'react';

import { ButtonProps } from './types';
import Button from './Button';

const AsyncButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading: sourceLoading, onClick, ...rest }, ref) => {
    const [loading, setLoading] = useState(false);
    const finalLoading = loading || sourceLoading;

    const handleClick = async (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (finalLoading || !onClick) {
        return;
      }

      setLoading(true);

      try {
        await onClick(event);
      } finally {
        setLoading(false);
      }
    };

    return (
      <Button loading={finalLoading} onClick={handleClick} ref={ref} {...rest}>
        {children}
      </Button>
    );
  }
);

AsyncButton.displayName = 'AsyncButton';
export default AsyncButton;
