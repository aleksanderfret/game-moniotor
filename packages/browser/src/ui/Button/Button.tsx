import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';

import Loader from 'ui/Loader';
import { ButtonProps } from './types';

const StyledButton = styled(LoadingButton)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.font.weight.light,

  '&.MuiLoadingButton-loading.MuiButton-outlined': {
    color: theme.utils.alpha(theme.palette.primary.main, 30),
    borderColor: theme.palette.primary.main,
  },

  '&.MuiLoadingButton-loading.MuiButton-contained': {
    backgroundColor: theme.palette.primary.main,
    color: theme.utils.alpha(theme.palette.primary.contrastText, 30),
  },

  '&.MuiLoadingButton-loading.MuiButton-containedError': {
    backgroundColor: theme.palette.error.main,
    color: theme.utils.alpha(theme.palette.error.contrastText, 60),
  },
}));

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ danger, disabled, loading, secondary, size, tertiary, ...props }, ref) => {
    const variant = tertiary ? 'text' : secondary ? 'outlined' : 'contained';
    const finalDisabled = disabled || loading;
    const loaderColor = secondary && !danger ? 'main' : 'contrast';
    const loaderSize = size === 'small' ? 'small' : 'medium';
    const color = danger ? 'error' : 'primary';

    return (
      <StyledButton
        color={color}
        disabled={finalDisabled}
        loading={loading}
        loadingIndicator={<Loader color={loaderColor} size={loaderSize} />}
        ref={ref}
        size="large"
        variant={variant}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
export default Button;
