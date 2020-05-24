export function isObject(obj) {
  return obj && obj.constructor && obj.constructor.name === 'Object';
}
