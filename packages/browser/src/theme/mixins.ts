import {
  css,
  CSSProperties,
  DefaultTheme,
  ThemedCssFunction
} from 'styled-components';

import {
  Breakpoint,
  BreakpointMixins,
  BreakpointValues,
  ShadowFunction
} from './types';
import { breakpoints } from './variables';
import { entries } from 'utils/entries';

export const breakpoint = entries<BreakpointValues>(breakpoints).reduce<
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
  transform: translate3d(0, 0, 0);
  backface-visibility:hidden;
  wii-change: ${properties.join(' ')};
`;

export const alpha = (color: string, opacity: number): string => {
  const pattern = /^#(?:[a-f\d]{3}){1,2}$/i;

  if (!pattern.test(color)) {
    throw new Error('Invalid hex color');
  }

  const hexValues = color.substring(1);

  const hexColor =
    hexValues.length <= 3
      ? `#${hexValues
          .split('')
          .map((v: string) => `${v}${v}`)
          .join('')}`
      : color;

  const normalizedOpacity = Math.round(
    opacity > -1 && opacity < 1 ? opacity * 100 : opacity
  );

  const validOpacity = Math.max(Math.min(normalizedOpacity, 100), 0);

  let hexOpacity = validOpacity.toString(16);
  hexOpacity = hexOpacity.length === 1 ? `0${hexOpacity}` : hexOpacity;

  return `${hexColor}${hexOpacity}`;
};

export const shadow: ShadowFunction = ({
  horizontal = 0,
  vertical = 0,
  blur = 0,
  spread = 0,
  color = '#00000032',
  unit = 'rem'
}) => {
  const b = blur ? `${blur}${unit}` : 0;
  const s = spread ? `${spread}${unit}` : 0;
  const h = horizontal ? `${horizontal}${unit}` : 0;
  const v = vertical ? `${vertical}${unit}` : 0;

  return `${h} ${v} ${b} ${s} ${color}`;
};
