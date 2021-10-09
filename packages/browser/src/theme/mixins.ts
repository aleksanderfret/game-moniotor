import { css, DefaultTheme, ThemedCssFunction } from 'styled-components';

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

export const transition = (...properties: string[]): string => `
  transition-property: ${properties.join(', ')};
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.5, 0, 0.25, 1);
  backface-visibility:hidden;
`;

const normalizeHex = (color: string): string => {
  const pattern = /^#(?:[a-f\d]{3}){1,2}$/i;

  if (!pattern.test(color)) {
    throw new Error('Invalid hex color');
  }

  const hexValues = color.substring(1);

  return hexValues.length <= 3
    ? `#${hexValues
        .split('')
        .map((v: string) => `${v}${v}`)
        .join('')}`
    : color;
};

export const alpha = (color: string, opacity: number): string => {
  const hexColor = normalizeHex(color);

  const normalizedOpacity = Math.round(
    opacity > -1 && opacity < 1 ? opacity * 100 : opacity
  );

  const validOpacity = Math.max(Math.min(normalizedOpacity, 100), 0);

  let hexOpacity = validOpacity.toString(16);
  hexOpacity = hexOpacity.length === 1 ? `0${hexOpacity}` : hexOpacity;

  return `${hexColor}${hexOpacity}`;
};

export const tint = (color: string, amount: number): string => {
  const hexColor = normalizeHex(color).substring(1);
  const percentage = Math.max(-100, Math.min(100, amount));
  const luminosity = 2.55 * percentage;

  const components = hexColor.match(/.{1,2}/g) || [];
  const tint = components
    .map((component: string) => {
      const intColor = parseInt(component, 16);
      const updatedColor = Math.round(
        Math.min(Math.max(0, intColor + luminosity), 255)
      ).toString(16);

      return updatedColor.length === 1 ? `0${updatedColor}` : updatedColor;
    })
    .join('');

  return `#${tint}`;
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
