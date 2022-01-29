import { styled } from '@mui/material/styles';

const Page = styled('div')(({ theme }) => ({
  display: 'flex',
  minWidth: '100vw',
  width: '100vw',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.common.black
}));

export default Page;
