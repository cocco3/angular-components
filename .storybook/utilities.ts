const isFunctionType = (value: unknown) => typeof value === 'function';

export const argsToAttributes = (args: Record<string, unknown>) =>
  Object.entries(args)
    .filter(([_key, value]) => !isFunctionType(value))
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');
