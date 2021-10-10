import React, { ComponentPropsWithoutRef } from 'react';

export type ButtonSize = 'small' | 'medium' | 'big';

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

export interface AsyncContentBoxProps {
  loading?: boolean;
}
