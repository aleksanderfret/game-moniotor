import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import MuiRadio from '@mui/material/Radio';
import MuiRadioGroup, {
  RadioGroupProps as MuiRadioGroupProps,
} from '@mui/material/RadioGroup';
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Controller, ControllerProps } from 'react-hook-form';

import FormLabel from 'ui/FormLabel';
import { RadioCheckedIcon, RadioIcon } from 'ui/Icons';

const Radio = styled(MuiRadio)(({ theme }) => ({
  '&.MuiRadio-root': {
    color: theme.palette.primary.main,
  },

  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
}));

interface RadioOption {
  label: string;
  value: string | number | boolean;
}

export interface RadioInputGroupProps
  extends MuiRadioGroupProps,
    Pick<FormControlLabelProps, 'label' | 'labelPlacement'> {
  options: RadioOption[];
}

export const RadioInputGroup = forwardRef<
  HTMLInputElement,
  RadioInputGroupProps
>(({ label: title, labelPlacement, options, ...props }, ref) => (
  <FormControl>
    <FormLabel id="game-status">{title}</FormLabel>
    <MuiRadioGroup aria-labelledby="game-status" name="status" {...props}>
      {options.map(({ label, value }) => (
        <FormControlLabel
          control={
            <Radio
              checkedIcon={<RadioCheckedIcon />}
              icon={<RadioIcon />}
              inputRef={ref}
            />
          }
          key={label}
          label={label}
          labelPlacement={labelPlacement}
          value={value}
        />
      ))}
    </MuiRadioGroup>
  </FormControl>
));

RadioInputGroup.displayName = 'RadioInputGroup';

export type RadioGroupProps<TFormValues> = Omit<
  ControllerProps<TFormValues>,
  'render'
> &
  RadioInputGroupProps;

export function RadioGroup<TFormValues>({
  control,
  defaultValue,
  rules,
  name,
  shouldUnregister,
  ...rest
}: RadioGroupProps<TFormValues>): JSX.Element {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { onBlur, onChange, ref, value } }) => (
        <RadioInputGroup
          {...rest}
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
