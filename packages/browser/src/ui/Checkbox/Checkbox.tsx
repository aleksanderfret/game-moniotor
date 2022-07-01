import React, { forwardRef } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import MuiCheckbox, {
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';

import { CheckboxIcon } from 'ui/Icons';

const StyledCheckbox = styled(MuiCheckbox)(({ theme }) => ({
  '&.MuiCheckbox-root': {
    color: theme.palette.primary.main,
  },

  '& .MuiSvgIcon-root': {
    fontSize: theme.font.size.large,
  },

  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
}));

export interface CheckboxInputProps
  extends MuiCheckboxProps,
    Pick<FormControlLabelProps, 'label' | 'labelPlacement'> {}

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ label, labelPlacement, ...props }, ref) => (
    <FormGroup>
      <FormControlLabel
        control={
          <StyledCheckbox
            icon={<CheckboxIcon />}
            inputRef={ref}
            size="medium"
            {...props}
          />
        }
        label={label}
        labelPlacement={labelPlacement}
      />
    </FormGroup>
  )
);

CheckboxInput.displayName = 'CheckboxInput';

export type CheckboxProps<TFormValues> = Omit<
  ControllerProps<TFormValues>,
  'render'
> &
  CheckboxInputProps;

export function Checkbox<TFormValues>({
  control,
  defaultValue,
  rules,
  name,
  shouldUnregister,
  ...rest
}: CheckboxProps<TFormValues>): JSX.Element {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { onBlur, onChange, ref, value } }) => (
        <CheckboxInput
          checked={value as boolean}
          {...rest}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
        />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
}
