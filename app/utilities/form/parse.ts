/* eslint-disable import/prefer-default-export */

export const number = (value?: string) => {
  if (value == null) return undefined;

  const number = Number(value);

  if (Number.isNaN(number)) return undefined;

  return number;
};