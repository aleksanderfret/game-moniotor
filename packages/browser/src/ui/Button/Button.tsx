import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import styled from 'styled-components';

type ButtonSize = 'small' | 'medium' | 'big';
export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  danger?: boolean;
  disabled?: boolean;
  label?: string;
  loading?: boolean;
  primary?: boolean;
  secondary?: boolean;
  size?: ButtonSize;
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface StyledButtonProps extends Omit<ButtonProps, 'size'> {
  size: number;
}

const PrimaryButton = styled.button<StyledButtonProps>`
  position: relative;
  font-family: inherit;
  letter-spacing: inherit;
  font-size: ${({ theme }) => theme.font.size.normal};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.palette.gray[400] : theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrast};
  box-sizing: border-box;
  outline: 0;
  border: 1px solid
    ${({ disabled, theme }) =>
      disabled ? theme.palette.gray[400] : theme.palette.primary.main};
  white-space: nowrap;
  height: ${({ size, theme }) => theme.size.calc(size)};
  max-height: ${({ size, theme }) => theme.size.calc(size)};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 ${({ theme }) => theme.size.calc(1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  box-shadow: ${({ theme }) => theme.shadows.init};
  ${({ theme }) =>
    theme.transition(
      'color',
      'background-color',
      'border-color',
      'box-shadow',
      'transform'
    )};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    border-color: ${({ theme }) => theme.palette.primary.dark};
  }

  &:active:not(:disabled) {
    background-color: ${({ theme }) => theme.palette.primary.light};
    border-color: ${({ theme }) => theme.palette.primary.light};
  }

  &:focus:not(:disabled) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

const DangerButton = styled(PrimaryButton)`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.palette.gray[400] : theme.palette.danger.dark};
  border: 1px solid
    ${({ disabled, theme }) =>
      disabled ? theme.palette.gray[400] : theme.palette.danger.main};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.palette.danger.dark};
    border-color: ${({ theme }) => theme.palette.danger.dark};
  }

  &:active:not(:disabled) {
    background-color: ${({ theme }) => theme.palette.danger.light};
    border-color: ${({ theme }) => theme.palette.danger.light};
  }

  &:focus:not(:disabled) {
    box-shadow: ${({ theme }) => theme.shadows.focusDanger};
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({ theme }) => theme.palette.background.light};
  color: ${({ disabled, theme }) =>
    disabled ? theme.palette.gray[400] : theme.palette.primary.main};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) =>
      theme.tint(theme.palette.primary.dark, 85)};
    border-color: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.primary.dark};
  }

  &:active:not(:disabled) {
    background-color: ${({ theme }) =>
      theme.tint(theme.palette.primary.dark, 80)};
    border-color: ${({ theme }) => theme.palette.primary.dark};
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

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
