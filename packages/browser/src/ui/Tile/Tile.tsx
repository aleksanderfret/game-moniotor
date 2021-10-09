import styled from 'styled-components';

const Tile = styled.div`
  background-color: ${({ theme }) => theme.colors.background.light};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  padding: ${({ theme }) => theme.mixins.size(1)};
`;

export default Tile;
