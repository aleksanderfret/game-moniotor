import { styled } from '@mui/material/styles';

const LoaderBox = styled('div')(({ theme }) => ({
  position: 'absolute',

  '&.small': {
    ...theme.utils.constSize(theme.sizes.sm),
  },

  '&.medium': {
    ...theme.utils.constSize(theme.sizes.md),
  },

  '&.big': {
    ...theme.utils.constSize(theme.sizes.xxl),
  },
}));

export default LoaderBox;
