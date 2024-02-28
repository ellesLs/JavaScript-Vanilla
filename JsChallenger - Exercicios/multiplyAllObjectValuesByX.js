function MultiplyAllObjectValues(a, b) {
  // meu metodo
  return Object.entries(a).reduce((acc, [key, val]) => {
    // verificando se ele é um numero
    return { ...acc, [key]: typeof val === "number" ? val * b : val };

    // sem verificar se o o valor da propriedade é um numero
    // return { ...acc, [key]: val * b};
  }, {});

  // metodo do javascript.info
  // newObj = {...a};
  // for(let key in newObj) {
  //     if(typeof newObj[key] == 'number') {
  //         newObj[key] = newObj[key] * b
  //     }
  // }
  // return newObj;
}

console.log(MultiplyAllObjectValues({ a: 1, b: 2, c: 3, d: "ola" }, 3));
