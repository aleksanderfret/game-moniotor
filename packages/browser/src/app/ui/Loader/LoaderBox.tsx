import styled from 'styled-components';

import { Size } from 'types';

export type LoaderSize = Extract<Size, 'md' | 'xl'>;

interface LoaderBoxProps {
  size: LoaderSize;
}

const LoaderBox = styled.div<LoaderBoxProps>`
  ${({ size, theme }) => theme.constSize(theme.size.values[size])};
  position: absolute;
`;

export default LoaderBox;
