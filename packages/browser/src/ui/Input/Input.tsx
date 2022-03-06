import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const StyledInput = styled(TextField)(({ theme }) => ({
  '& label.MuiInputLabel-root': {
    color: theme.palette.primary.main,

    '&.Mui-focused': {
      color: theme.palette.primary.dark,
    },

    '&.Mui-error': {
      color: theme.palette.error.main,
    },
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },

    '&:hover fieldset': {
      borderColor: theme.palette.primary.dark,
    },
  },
}));

type InputProps = TextFieldProps & {
  feedback?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ feedback, ...props }, ref) => {
    return (
      <StyledInput
        helperText={feedback}
        ref={ref}
        variant="outlined"
        {...props}
        size="small"
      />
    );
  }
);

Input.displayName = 'Input';
export default Input;
