import React, { forwardRef } from 'react';
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

  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
}));

interface CheckboxProps
  extends MuiCheckboxProps,
    Pick<FormControlLabelProps, 'label' | 'labelPlacement'> {}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, labelPlacement, ...props }, ref) => {
    return (
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
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
