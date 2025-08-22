export const date = (value: string | number) => new Date(value);

export const text = (value?: any): string => value?.toString();

export const options = (options: Array<{
  value: string | number;
  label: string;
}>) => (value: string | number) => {
  if (!Array.isArray(options)) return value;

  const find = options.find(item => item.value === value);

  return find ? find.label : value;
};

export const stringifyNumberProps = (obj: any): any => {
  if (typeof obj !== 'object' || obj === null) {
   return;
  }

  const convert = (input: any): any => {
    if (Array.isArray(input)) {
      return input.map(item => convert(item));
    }

    if (typeof input === 'object') {
      return Object.entries(input).reduce<Record<string, any>>((acc, [key, value]) => {
        if (typeof value === 'number') {
          acc[key] = value.toString();
        } else if (typeof value === 'object' && value !== null) {
          acc[key] = convert(value);
        } else {
          acc[key] = value;
        }

        return acc;
      }, {});
    }

    return input;
  };

  return convert(obj);
};