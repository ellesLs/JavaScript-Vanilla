function mergeTwoObjects(x, y) {
  // Minha versão
  const d = y.b;
  ({ b, ...NewY } = y);
  return { ...x, ...NewY, d };

  // uma maneira melhor
  // const { b, ...rest } = y;
  // return { ...x, ...rest, d: b };
}

console.log(mergeTwoObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));

console.log(mergeTwoObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));
