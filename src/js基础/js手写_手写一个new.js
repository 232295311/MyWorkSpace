function myNew() {
  const constructor = Array.prototype.shift.call(arguments); //只要第一个
  const obj = Object.create(constructor.prototype);
  const result = constructor.apply(obj, arguments);
  return result instanceof Object ? result : obj;
}
