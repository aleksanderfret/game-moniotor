import {
  css,
  CSSProperties,
  DefaultTheme,
  ThemedCssFunction
} from 'styled-components';

import { Breakpoint, BreakpointMixins, Breakpoints } from './types';
import { breakpoints } from './variables';
import { entries } from 'utils/entries';

export const breakpoint = entries<Breakpoints>(breakpoints).reduce<
  Record<Breakpoint, ThemedCssFunction<DefaultTheme>>
>(
  (accumulator: BreakpointMixins, [key, value]) => ({
    ...accumulator,
    [key]: (...args: Parameters<ThemedCssFunction<DefaultTheme>>) => css`
      @media (min-width: ${value}px) {
        ${css(...args)};
      }
    `
  }),
  {} as BreakpointMixins
);

export const constSize = (width: string, height: string = width): string => `
  width: ${width};
  max-width: ${width};
  min-width: ${width};
  height: ${height};
  max-height: ${height};
  min-height: ${height};
  flex-shrink: 0;
`;

export const transition = (...properties: CSSProperties[]): string => `
  transition-property: ${properties.join(' ')};
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.5, 0, 0.25, 1);
`;
