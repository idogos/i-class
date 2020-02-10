export function isObject(obj) {
  return obj.constructor && obj.constructor.name === 'Object';
}
