import { keyframes, styled } from '@mui/material/styles';

const loaderBounceDelay = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0);
  }

  40% {
    transform: scale(1);
  }
`;

const LoaderDot = styled('div')(({ theme }) => ({
  width: '100%',
  height: ' 100%',
  position: 'absolute',
  left: 0,
  top: 0,

  '&::before': {
    /* stylelint-disable */
    content: '""',
    /* stylelint-enable */
    display: 'block',
    margin: '0 auto',
    width: '15%',
    height: '15%',
    borderRadius: '100%',
    animation: `${loaderBounceDelay} 1.2s infinite ease-in-out both`,
  },

  '&.main': {
    '&::before': {
      backgroundColor: theme.palette.primary.main,
    },
  },

  '&.contrast': {
    '&::before': {
      backgroundColor: theme.palette.primary.contrastText,
    },
  },

  '&:nth-of-type(2)': {
    transform: 'rotate(30deg)',

    '&::before': {
      animationDelay: '-1.1s',
    },
  },

  '&:nth-of-type(3)': {
    transform: 'rotate(60deg)',

    '&::before': {
      animationDelay: '-1s',
    },
  },

  '&:nth-of-type(4)': {
    transform: 'rotate(90deg)',

    '&::before': {
      animationDelay: '-0.9s',
    },
  },

  '&:nth-of-type(5)': {
    transform: 'rotate(120deg)',

    '&::before': {
      animationDelay: '-0.8s',
    },
  },

  '&:nth-of-type(6)': {
    transform: 'rotate(150deg)',

    '&::before': {
      animationDelay: '-0.7s',
    },
  },

  '&:nth-of-type(7)': {
    transform: 'rotate(180deg)',

    '&::before': {
      animationDelay: '-0.6s',
    },
  },

  '&:nth-of-type(8)': {
    transform: 'rotate(210deg)',

    '&::before': {
      animationDelay: '-0.5s',
    },
  },

  '&:nth-of-type(9)': {
    transform: 'rotate(240deg)',

    '&::before': {
      animationDelay: '-0.4s',
    },
  },

  '&:nth-of-type(10)': {
    transform: 'rotate(270deg)',

    '&::before': {
      animationDelay: '-0.3s',
    },
  },

  '&:nth-of-type(11)': {
    transform: 'rotate(300deg)',

    '&::before': {
      animationDelay: '-0.2s',
    },
  },

  '&:nth-of-type(12)': {
    transform: 'rotate(330deg)',

    '&::before': {
      animationDelay: '-0.1s',
    },
  },
}));

export default LoaderDot;
