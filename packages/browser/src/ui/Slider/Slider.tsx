import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import MuiSlider, { SliderProps as MuiSliderProps } from '@mui/material/Slider';
import {
  Controller,
  ControllerProps,
  Path,
  PathValue,
  UnpackNestedValue,
} from 'react-hook-form';

import FormLabel from 'ui/FormLabel';

const StyledSlider = styled(MuiSlider)(({ theme }) => ({
  height: 8,

  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
  },

  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: theme.palette.primary.main,
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',

    '&::before': { display: 'none' },

    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },

    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
}));

export interface SliderInputProps extends MuiSliderProps {
  label: ReactNode;
}

export const SliderInput = ({
  label,
  ...props
}: SliderInputProps): JSX.Element => (
  <>
    <FormLabel>{label}</FormLabel>
    <StyledSlider {...props} />
  </>
);

type SliderValue = number | number[];

function getDisplayValue<TFormValues>(
  value: UnpackNestedValue<PathValue<TFormValues, Path<TFormValues>>>,
  defaultValue?: SliderValue
): SliderValue | undefined {
  const isArray = Array.isArray(value);

  return (isArray && value.length) || (!isArray && value !== null)
    ? (value as SliderValue)
    : defaultValue;
}

export type SliderProps<TFormValues> = Omit<
  ControllerProps<TFormValues>,
  'render'
> &
  SliderInputProps;

export function Slider<TFormValues>({
  control,
  defaultValue,
  rules,
  name,
  shouldUnregister,
  ...rest
}: SliderProps<TFormValues>): JSX.Element {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { onChange, value } }) => (
        <SliderInput
          {...rest}
          name={name}
          onChange={(_, value) => {
            onChange(value);
          }}
          value={getDisplayValue(value, defaultValue)}
        />
      )}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
}
