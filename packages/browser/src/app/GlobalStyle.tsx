import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  font,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    box-sizing: border-box;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
  }

  :focus {
    outline: 0;
  }

  ins {
    text-decoration: none;
  }

  del {
    text-decoration: line-through;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  :root {
  --theme-color: #001999;
  --page-gray: #fafafa;
  }

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
    color: ${({ theme }) => theme.colors.common.black};
    letter-spacing: ${({ theme }) => theme.colors.common.black};
    background-color: ${({ theme }) => theme.colors.background.main};
  }
`;

export default GlobalStyle;
