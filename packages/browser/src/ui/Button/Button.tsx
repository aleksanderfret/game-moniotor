import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import styled from 'styled-components';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  danger?: boolean;
  disabled?: boolean;
  label?: string;
  loading?: boolean;
  primary?: boolean;
  secondary?: boolean;
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  font-family: inherit;
  letter-spacing: inherit;
  font-size: ${({ theme }) => theme.font.size.normal};
  background: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrast};
  box-sizing: border-box;
  outline: 0;
  border: 0;
  white-space: nowrap;
  height: ${({ theme }) => theme.size.calc(3)};
  max-height: ${({ theme }) => theme.size.calc(3)};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.palette.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.palette.primary.dark};
  }

  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

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
      title,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const disabled = sourceDisabled || loading;
    const secondary = sourceSecondary && !sourcePrimary;
    const primary = sourcePrimary || !secondary;

    const handleClick = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (loading || !onClick) {
        return;
      }

      onClick(event);
    };

    return (
      <StyledButton
        {...rest}
        aria-label={label}
        danger={danger}
        disabled={disabled}
        onClick={handleClick}
        primary={primary}
        ref={ref}
        secondary={secondary}
        title={title}
        type={type}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
