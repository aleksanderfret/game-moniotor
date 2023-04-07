import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import MuiFormLabel, { FormLabelProps } from '@mui/material/FormLabel';

const StyledLabel = styled(MuiFormLabel)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const FormLabel: FC<FormLabelProps> = ({ children, ...props }) => (
  <StyledLabel {...props}>{children}</StyledLabel>
);

export default FormLabel;
