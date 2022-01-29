import { styled } from '@mui/material/styles';

import { AsyncContentBoxProps } from './types';

export const PrimaryButton = styled('button')(({ theme }) => ({
  position: 'relative',
  fontFamily: 'inherit',
  letterSpacing: 'inherit',
  fontSize: theme.font.size.normal,
  fontWeight: theme.font.weight.regular,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  boxSizing: 'border-box',
  outline: 0,
  border: `1px solid ${theme.palette.primary.main}`,
  whiteSpace: 'nowrap',
  borderRadius: theme.shape.borderRadius,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  padding: `0 ${theme.utils.size(1)}`,
  cursor: 'pointer',
  boxShadow: theme.shadow.init,
  transition: theme.transitions.create([
    'color',
    'background-color',
    'border-color',
    'box-shadow',
    'transform'
  ]),

  '&:disabled:not(.loading)': {
    backgroundColor: theme.palette.grey[400],
    border: `1px solid ${theme.palette.grey[400]}`,
    cursor: 'not-allowed'
  },

  '&.loading:not(:disabled)': {
    cursor: 'initial'
  },

  '&.small': {
    height: theme.utils.size(2),
    maxHeight: theme.utils.size(2)
  },

  '&.medium': {
    height: theme.utils.size(2.5),
    maxHeight: theme.utils.size(2.5)
  },

  '&.big': {
    height: theme.utils.size(3),
    maxHeight: theme.utils.size(3)
  },

  '&:hover:not(:disabled):not(.loading)': {
    backgroundColor: theme.palette.primary.dark,
    borderColor: theme.palette.primary.dark
  },

  '&:active:not(:disabled):not(.loading)': {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.light
  },

  '&:focus:not(:disabled)': {
    boxShadow: theme.shadow.focus
  }
}));

export const SecondaryButton = styled(PrimaryButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,

  '&:disabled:not(.loading)': {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.grey[400]
  },

  '&:hover:not(:disabled):not(.loading), &:active:not(:disabled):not(.loading)':
    {
      borderColor: theme.palette.primary.dark,
      color: theme.palette.primary.dark
    },

  '&:hover:not(:disabled):not(.loading)': {
    backgroundColor: theme.utils.tint(theme.palette.primary.dark, 85)
  },

  '&:active:not(:disabled):not(.loading)': {
    backgroundColor: theme.utils.tint(theme.palette.primary.dark, 80)
  }
}));

export const DangerButton = styled(PrimaryButton)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  border: `1px solid ${theme.palette.error.main}`,

  '&:disabled:not(.loading)': {
    backgroundColor: theme.palette.grey[400],
    border: `1px solid ${theme.palette.grey[400]}`
  },

  '&:hover:not(:disabled):not(.loading)': {
    backgroundColor: theme.palette.error.dark,
    borderColor: theme.palette.error.dark
  },

  '&:active:not(:disabled):not(.loading)': {
    backgroundColor: theme.palette.error.light,
    borderColor: theme.palette.error.light
  },

  '&:focus:not(:disabled)': {
    boxShadow: theme.shadow.focusError
  }
}));

export const AsyncContentBox = styled('span')<AsyncContentBoxProps>(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&.loading': {
    visibility: 'collapse',
    userSelect: 'none'
  }
}));
