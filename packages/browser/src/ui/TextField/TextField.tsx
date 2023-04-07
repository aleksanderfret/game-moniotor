import React, { forwardRef } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import TextInputField, {
  TextFieldProps as MuiTextInputProps,
} from '@mui/material/TextField';

const StyledInput = styled(TextInputField)(({ theme }) => ({
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

export type TextInputProps = MuiTextInputProps & {
  feedback?: string;
};

export type TextFieldProps<TFormValues> = Omit<
  ControllerProps<TFormValues>,
  'render'
> &
  TextInputProps;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ feedback, ...props }, ref) => (
    <StyledInput
      helperText={feedback}
      inputRef={ref}
      variant="outlined"
      {...props}
      size="medium"
    />
  )
);

TextInput.displayName = 'TextInput';

export function TextField<TFormValues>({
  control,
  defaultValue,
  rules,
  name,
  shouldUnregister,
  ...rest
}: TextFieldProps<TFormValues>): JSX.Element {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({
        field: { onBlur, onChange, ref, value },
        fieldState: { error },
      }) => (
        <TextInput
          {...rest}
          error={Boolean(error)}
          feedback={error ? error.message : undefined}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
          value={value}
        />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
}
