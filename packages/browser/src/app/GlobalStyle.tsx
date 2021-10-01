import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    max-width: 100%;
    overflow-x: hidden;
    min-height: 100vh;
  }

  body {
    font-style: normal;
    font-variant: normal;
    font-weight: ${({ theme }) => theme.font.weight.light};
    font-size: ${({ theme }) => theme.font.base};
    font-family: ${({ theme }) => theme.font.fontFamily};
    line-height: ${({ theme }) => theme.font.lineHeight};
    color: ${({ theme }) => theme.font.lineHeight};
    letter-spacing: ${({ theme }) => theme.palette.common.black};
    background-color: ${({ theme }) => theme.palette.background.main};
  }
`;

export default GlobalStyle;
