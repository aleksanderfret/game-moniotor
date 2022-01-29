import { styled } from '@mui/material/styles';

const Tile = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
}));

export default Tile;
