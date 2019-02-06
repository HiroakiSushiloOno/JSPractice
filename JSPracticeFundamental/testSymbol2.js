const sym = Symbol();
const obj = {};

obj[sym] = 'hoge';
console.log(obj[sym]);
console.log(obj);
