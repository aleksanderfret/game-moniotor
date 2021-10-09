import styled, { keyframes } from 'styled-components';

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

export type LoaderColor = 'main' | 'contrast';

interface LoaderDotProps {
  color: LoaderColor;
}

const LoaderDot = styled.div<LoaderDotProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &::before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: ${({ color, theme }) => theme.palette.primary[color]};
    border-radius: 100%;
    animation: ${loaderBounceDelay} 1.2s infinite ease-in-out both;
  }

  &:nth-child(2) {
    transform: rotate(30deg);

    &::before {
      animation-delay: -1.1s;
    }
  }

  &:nth-child(3) {
    transform: rotate(60deg);

    &::before {
      animation-delay: -1s;
    }
  }

  &:nth-child(4) {
    transform: rotate(90deg);

    &::before {
      animation-delay: -0.9s;
    }
  }

  &:nth-child(5) {
    transform: rotate(120deg);

    &::before {
      animation-delay: -0.8s;
    }
  }

  &:nth-child(6) {
    transform: rotate(150deg);

    &::before {
      animation-delay: -0.7s;
    }
  }

  &:nth-child(7) {
    transform: rotate(180deg);

    &::before {
      animation-delay: -0.6s;
    }
  }

  &:nth-child(8) {
    transform: rotate(210deg);

    &::before {
      animation-delay: -0.5s;
    }
  }

  &:nth-child(9) {
    transform: rotate(240deg);

    &::before {
      animation-delay: -0.4s;
    }
  }

  &:nth-child(10) {
    transform: rotate(270deg);

    &::before {
      animation-delay: -0.3s;
    }
  }

  &:nth-child(11) {
    transform: rotate(300deg);

    &::before {
      animation-delay: -0.2s;
    }
  }

  &:nth-child(12) {
    transform: rotate(330deg);

    &::before {
      animation-delay: -0.1s;
    }
  }
`;

export default LoaderDot;
