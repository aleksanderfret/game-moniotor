import { LoadingButtonProps } from '@mui/lab/LoadingButton';

export interface ButtonProps extends LoadingButtonProps {
  secondary?: boolean;
  tertiary?: boolean;
  danger?: boolean;
}

export interface AsyncContentBoxProps {
  loading?: boolean;
}
