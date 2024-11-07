/**
 * This code is lifted from this PR:
 * https://github.com/storybookjs/storybook/pull/29190/files#diff-8bd7f89f970c6191c0d11077ba1739b7a042ec8b16059c8f15302684dc7f952e
 *
 * It can be deleted once this PR is merged, and we've upgraded to Storybook 8.
 */

import { ArgTypes } from 'storybook/internal/types';

export const argsToAttributes = (args: Record<string, unknown>) =>
  Object.entries(args)
    .filter(([_key, value]) => value !== undefined)
    .map(([key, value]) =>
      isFunctionType(value)
        ? `(${key})="${formatPropInTemplate(key)}($event)"`
        : createAngularInputProperty({ propertyName: key, value: args[key] })
    )
    .join(' ');

const isFunctionType = (value: unknown) => typeof value === 'function';

/**
 * Check if the name matches the criteria for a valid identifier. A valid identifier can only
 * contain letters, digits, underscores, or dollar signs. It cannot start with a digit.
 */
const isValidIdentifier = (name: string): boolean =>
  /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name);

/**
 * Returns the property name, if it can be accessed with dot notation. If not, it returns
 * `this['propertyName']`.
 */
const formatPropInTemplate = (propertyName: string) =>
  isValidIdentifier(propertyName) ? propertyName : `this['${propertyName}']`;

function stringifyCircular(obj: any) {
  const seen = new Set();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return '[Circular]';
      }
      seen.add(value);
    }
    return value;
  });
}

const createAngularInputProperty = ({
  propertyName,
  value,
  argType,
}: {
  propertyName: string;
  value: any;
  argType?: ArgTypes[string];
}) => {
  let templateValue;
  switch (typeof value) {
    case 'string':
      templateValue = `'${value}'`;
      break;
    case 'object':
      templateValue = stringifyCircular(value)
        .replace(/'/g, '\u2019')
        .replace(/\\"/g, '\u201D')
        .replace(/"([^-"]+)":/g, '$1: ')
        .replace(/"/g, "'")
        .replace(/\u2019/g, "\\'")
        .replace(/\u201D/g, "\\'")
        .split(',')
        .join(', ');
      break;
    default:
      templateValue = value;
  }

  return `[${propertyName}]="${templateValue}"`;
};
