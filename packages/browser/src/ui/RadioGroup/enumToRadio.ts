interface RadioOption {
  label: string;
  value: string | number;
}

export const enumToRadio = (e: Record<string, string>): RadioOption[] =>
  Object.keys(e).map(key => ({
    label: key.toLowerCase(),
    value: e[key],
  }));
