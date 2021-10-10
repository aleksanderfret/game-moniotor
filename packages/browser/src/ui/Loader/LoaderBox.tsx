import styled from 'styled-components';

const LoaderBox = styled.div`
  position: absolute;

  &.small {
    ${({ theme }) => theme.mixins.constSize(theme.sizes.sm)};
  }

  &.medium {
    ${({ theme }) => theme.mixins.constSize(theme.sizes.md)};
  }

  &.big {
    ${({ theme }) => theme.mixins.constSize(theme.sizes.xxl)};
  }
`;

export default LoaderBox;
