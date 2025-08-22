const strain = (value?: string) => value?.replace(/<\/?[^>]+(>|$)|<|>/gm, '');

export const email = (value?: string) => value?.replace(/\s/gm, '');

export const password = (value?: string) => value?.replace(/\s/gm, '');

export const name = (value?: string) => value?.replace(/^[\s+]/gm, '')?.replace(/[\s+]{2,}$/g, ' ');

export const timecode = (value?: string) => value?.replace(/\W/gi, '')?.toUpperCase();

export const textarea = (value?: string) => strain(value?.replace(/[<>]/gmi, ''));

export const url = (value?: string) => value?.replace(/http:\/\/|https:\/\//gi, '');

export const amount = (props?: { decimal?: number }) => (value?: string, previous?: string) => {
  const { decimal = 2 } = (props ?? {});

  if (!value) return value;

  const string = String(value).replace(',', '.').replace(/\.(?=.*\.)/gm, '');

  if (Number.isNaN(Number(string))) return previous;

  const regex = new RegExp(`(\\d+\\.?\\d{0,${decimal ?? ''}})`, 'gm');

  const match = string.match(regex);

  return match ? match[0] : previous;
};