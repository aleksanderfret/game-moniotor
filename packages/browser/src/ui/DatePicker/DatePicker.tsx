import React, { forwardRef } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
import MuiDatePicker, {
  DatePickerProps as MuiDatePickerProps,
} from '@mui/lab/DatePicker';

import { TextInput } from 'ui/TextField';

export type DatePickerInputProps = Omit<MuiDatePickerProps, 'renderInput'>;

export const DatePickerInput = forwardRef<
  HTMLInputElement,
  DatePickerInputProps
>(({ ...props }, ref) => {
  return (
    <MuiDatePicker
      renderInput={params => <TextInput {...params} fullWidth ref={ref} />}
      {...props}
    />
  );
});

export type DatePickerProps<TFormValues> = Omit<
  ControllerProps<TFormValues>,
  'render'
> &
  Omit<DatePickerInputProps, 'onChange' | 'value'>;

DatePickerInput.displayName = 'DatePickerInput';

export function DatePicker<TFormValues>({
  control,
  defaultValue,
  rules,
  name,
  shouldUnregister,
  ...rest
}: DatePickerProps<TFormValues>): JSX.Element {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { onChange, ref, value } }) => (
        <DatePickerInput
          {...rest}
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
