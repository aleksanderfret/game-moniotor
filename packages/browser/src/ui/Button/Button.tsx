import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { ButtonProps } from './types';
import { DangerButton, PrimaryButton, SecondaryButton } from './StyledButtons';

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
      size = 'medium',
      title,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const secondary = sourceSecondary && !sourcePrimary;
    const primary = sourcePrimary || !secondary;
    const disabled = sourceDisabled || loading;

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

    const classes = clsx({
      loading,
      danger,
      small: size === 'small',
      medium: size === 'medium',
      big: size === 'big'
    });

    return (
      <Component
        {...rest}
        aria-label={label}
        className={classes}
        disabled={disabled}
        onClick={handleClick}
        ref={ref}
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
