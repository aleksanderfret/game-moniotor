import styled from 'styled-components';

const Tile = styled.div`
  background-color: ${({ theme }) => theme.palette.background.light};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  padding: ${({ theme }) => theme.size.calc(1)};
`;

export default Tile;
