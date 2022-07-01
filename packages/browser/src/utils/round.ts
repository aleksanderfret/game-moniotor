const round = (number: number, precision = 0): number => {
  const scale = Math.pow(10, Math.round(Math.abs(precision)));

  return Math.round((number + Number.EPSILON) * scale) / scale;
};
export default round;
