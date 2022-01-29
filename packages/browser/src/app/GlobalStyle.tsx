import React from 'react';
import MuiGlobalStyles from '@mui/material/GlobalStyles';

const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={theme => ({
      'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td':
        {
          margin: 0,
          padding: 0,
          border: 0,
          outline: 0,
          fontSize: '100%',
          verticalAlign: 'baseline',
          background: 'transparent',
          boxSizing: 'border-box',
        },
      'ol,ul': {
        listStyle: 'none',
      },
      'blockquote, q': {
        quotes: 'none',
      },
      ':focus': {
        outline: 0,
      },
      ins: {
        textDecoration: 'none',
      },
      del: {
        textDecoration: 'line-through',
      },
      table: {
        borderCollapse: 'collapse',
        borderSpacing: 0,
      },
      'html,body': {
        maxWidth: '100%',
        overflowX: 'hidden',
        minHeight: '100vh',
      },
      body: {
        fontStyle: 'normal',
        fontVariant: 'normal',
        fontWeight: theme.font.weight.light,
        fontSize: theme.font.base,
        fontFamily: theme.font.fontFamily,
        lineHeight: theme.font.lineHeight,
        color: theme.palette.common.black,
        letterSpacing: '0.2px',
        backgroundColor: theme.palette.background.default,
      },
    })}
  />
);

export default GlobalStyles;
