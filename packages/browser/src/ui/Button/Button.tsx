import React, { forwardRef } from 'react';

import { ButtonProps, ButtonSize } from './types';
import { DangerButton, PrimaryButton, SecondaryButton } from './StyledButtons';

const setSizeFactor = (size?: ButtonSize): number => {
  switch (size) {
    case 'small':
      return 2;
    case 'medium':
      return 2.5;
    case 'big':
      return 3;
    default:
      return 2.5;
  }
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      danger,
      disabled: sourceDisabled,
      label,
      loading,
      onClick,
      primary: sourcePrimary,
      secondary: sourceSecondary,
      size,
      title,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const disabled = sourceDisabled || loading;
    const secondary = sourceSecondary && !sourcePrimary;
    const primary = sourcePrimary || !secondary;

    const Component = primary
      ? danger
        ? DangerButton
        : PrimaryButton
      : SecondaryButton;

    const handleClick = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (loading || !onClick) {
        return;
      }

      onClick(event);
    };

    return (
      <Component
        {...rest}
        aria-label={label}
        danger={danger}
        disabled={disabled}
        onClick={handleClick}
        primary={primary}
        ref={ref}
        secondary={secondary}
        size={setSizeFactor(size)}
        title={title}
        type={type}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
