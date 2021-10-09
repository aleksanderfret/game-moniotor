const normalizeHexHexColor = (color: string): string => {
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

export default normalizeHexHexColor;
