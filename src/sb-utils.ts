export const argsToAttributes = (args: Record<string, unknown>) =>
  Object.entries(args)
    .map(([key, val]) => `${key}="${val}"`)
    .join(' ');
