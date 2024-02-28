function checkIfpropExistInObject(a, b) {
  // Minha Versão
  return b in a && a[b] !== undefined && a[b] !== null;

  // return Boolean(a[b]);
}

console.log(checkIfpropExistInObject({ a: 1, b: 2, c: 3 }, "b"));

console.log(checkIfpropExistInObject({ x: "a", y: null, z: "c" }, "y"));

console.log(checkIfpropExistInObject({ x: "a", b: "b", z: undefined }, "z"));
