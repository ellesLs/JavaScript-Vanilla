function deletingPropInObject(obj) {
  // com o delete, ele deleta a propriedade b do original
  // ou da copia
  // delete obj.b;
  // const newObj = {...obj}
  // delete newObj.b
  // return newObj

  // usando o spread pra copiar o obj sem a propriedade b
  // o recomendado pra tirar uma propriedade de um objeto
  const { b, ...rest } = obj;
  return rest;
}

console.log(deletingPropInObject({ a: 1, b: 7, c: 3 }));
