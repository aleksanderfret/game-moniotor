import React from 'react';
import { styled } from '@mui/material/styles';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Controller, ControllerProps } from 'react-hook-form';

import { FavoriteIcon } from 'ui/Icons';
import { CheckboxInput, CheckboxInputProps } from 'ui/Checkbox';

const StyledCheckbox = styled(CheckboxInput)(({ theme }) => ({
  '&.MuiCheckbox-root': {
    color: theme.palette.grey[400],
  },

  '& .MuiSvgIcon-root': {
    fontSize: theme.font.size.large,
  },

  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
}));

export type FavoriteProps<TFormValues> = Omit<
  ControllerProps<TFormValues>,
  'render'
> &
  CheckboxInputProps;

export function Favorite<TFormValues>({
  control,
  defaultValue,
  rules,
  name,
  shouldUnregister,
  ...rest
}: FavoriteProps<TFormValues>): JSX.Element {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { onBlur, onChange, ref, value } }) => (
        <StyledCheckbox
          {...rest}
          checkedIcon={<FavoriteRoundedIcon />}
          icon={<FavoriteIcon />}
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
