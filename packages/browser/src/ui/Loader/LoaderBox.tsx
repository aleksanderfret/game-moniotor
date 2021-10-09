import styled from 'styled-components';

import { SizeLabel } from 'theme/types';

export type LoaderSize = Extract<SizeLabel, 'sm' | 'md' | 'xl'>;

interface LoaderBoxProps {
  size: LoaderSize;
}

const LoaderBox = styled.div<LoaderBoxProps>`
  ${({ size, theme }) => theme.mixins.constSize(theme.sizes[size])};
  position: absolute;
`;

export default LoaderBox;
