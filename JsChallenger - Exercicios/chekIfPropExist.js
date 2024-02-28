function chekIfPropExist(obj) {
  return obj?.a?.b;
}

console.log(chekIfPropExist({ a: 1 }));

console.log(chekIfPropExist({ a: { b: { c: 3 } } }));

console.log(chekIfPropExist({ b: { a: 1 } }));

console.log(chekIfPropExist({ a: { b: 2 } }));
