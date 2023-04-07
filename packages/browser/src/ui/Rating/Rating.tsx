import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import MuiRating, { RatingProps as MuiRatingProps } from '@mui/material/Rating';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import Box from '@mui/material/Box';
import {
  Controller,
  ControllerProps,
  Path,
  PathValue,
  UnpackNestedValue,
} from 'react-hook-form';

import FormLabel from 'ui/FormLabel';

const RatingBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export interface RatingInputProps extends MuiRatingProps {
  label?: ReactNode;
}

export const RatingInput = ({
  label,
  ...props
}: RatingInputProps): JSX.Element => (
  <RatingBox>
    {label && <FormLabel>{label}</FormLabel>}
    <MuiRating
      emptyIcon={<StarBorderRoundedIcon fontSize="inherit" />}
      icon={<StarRoundedIcon fontSize="inherit" />}
      max={10}
      name="rate"
      size="large"
      {...props}
    />
  </RatingBox>
);
function getDisplayValue<TFormValues>(
  value: UnpackNestedValue<PathValue<TFormValues, Path<TFormValues>>>
): number | undefined {
  return (value as number) || undefined;
}

export type RatingProps<TFormValues> = Omit<
  ControllerProps<TFormValues>,
  'render'
> &
  RatingInputProps;

export function Rating<TFormValues>({
  control,
  defaultValue,
  rules,
  name,
  shouldUnregister,
  ...rest
}: RatingProps<TFormValues>): JSX.Element {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { onChange, value } }) => {
        return (
          <RatingInput
            {...rest}
            name={name}
            onChange={(_, value) => {
              onChange(value);
            }}
            value={getDisplayValue(value) || null}
          />
        );
      }}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
}
