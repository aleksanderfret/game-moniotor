import { css, DefaultTheme, ThemedCssFunction } from 'styled-components';

import normalizeHexColor from './normalizeHexColor';
import {
  Breakpoint,
  BreakpointMixins,
  BreakpointValues,
  GridClassesMixin,
  SizeMixin,
  Unit
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

export const alpha = (color: string, opacity: number): string => {
  const hexColor = normalizeHexColor(color);

  const normalizedOpacity = Math.round(
    opacity > -1 && opacity < 1 ? opacity * 100 : opacity
  );

  const validOpacity = Math.max(Math.min(normalizedOpacity, 100), 0);

  let hexOpacity = validOpacity.toString(16);
  hexOpacity = hexOpacity.length === 1 ? `0${hexOpacity}` : hexOpacity;

  return `${hexColor}${hexOpacity}`;
};

export const tint = (color: string, amount: number): string => {
  const hexColor = normalizeHexColor(color).substring(1);

  const percentage = Math.max(-100, Math.min(100, amount));
  const luminosity = 2.55 * percentage;

  const components = hexColor.match(/.{1,2}/g) || [];
  const tint = components
    .map((component: string) => {
      const intColor = parseInt(component, 16);
      const updatedComponent = Math.round(
        Math.min(Math.max(0, intColor + luminosity), 255)
      ).toString(16);

      return updatedComponent.length === 1
        ? `0${updatedComponent}`
        : updatedComponent;
    })
    .join('');

  return `#${tint}`;
};

export const size =
  (multiplier: number, unit: Unit): SizeMixin =>
  (multiplicand: number): string =>
    `${multiplicand * multiplier}${unit}`;

export const cols = (size: SizeMixin) => (gap: number) =>
  `
& > :not(:last-child) {
  margin-right: ${size(gap)};
}
`;

export const colsAll = (size: SizeMixin) => (gap: number) =>
  `
& > * {
  margin-right: ${size(gap)};
}
`;

export const rows = (size: SizeMixin) => (gap: number) =>
  `
& > :not(:last-child) {
  margin-right: ${size(gap)};
}
  `;

export const rowsAll = (size: SizeMixin) => (gap: number) =>
  `
& > * {
  margin-right: ${size(gap)};
}
  `;

const gridClass = (
  columns: number,
  selector: string,
  className: string,
  breakpoint: string
) => {
  let styles = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= columns; i++) {
    const value = `${(i / columns) * 100}%`;

    styles += `
      ${selector}.${className}-${breakpoint}-${i} {
        -webkit-flex-basis: ${value};
        -ms-flex-preferred-size: ${value};
        flex-basis: ${value};
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: ${value};
      }

    `;
  }

  return styles;
};

export const gridClasses =
  (breakpoints: BreakpointValues): GridClassesMixin =>
  (className, options) => {
    const { selector = '', columns = 12, unit = 'px' } = options || {};
    let styles = '';

    Object.entries(breakpoints).forEach(([breakpoint, size]) => {
      styles += `
      @media only screen and (min-width: ${size}${unit}) {
        ${gridClass(columns, selector, className, breakpoint)}
      }

      `;
    });

    return styles;
  };
