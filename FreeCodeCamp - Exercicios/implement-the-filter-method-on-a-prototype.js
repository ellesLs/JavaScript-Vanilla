/*Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter().
You should not use the built-in filter method.
The Array instance can be accessed in the myFilter method using this.*/

Array.prototype.myFilter = function (callback) {
  const newArray = [];

  // Minha versão sem usar push
  let pos = 0;
  for (let i = 0; i < this.length; i++) {
    if (!!callback(this[i], i, this)) {
      newArray[pos] = this[i];
      pos++;
    }
  }

  // uma versão com push e sem converter pra boolean
  // for (const [index, elem] of this.entries()) {
  //   if (callback(elem, index, this)) newArray.push(elem);
  // }

  return newArray;
};

console.log([23, 65, 98, 5, 13].myFilter((item) => item % 2));

console.log(
  ["naomi", "quincy", "camperbot"].myFilter((element) => element === "naomi")
);

console.log(
  [1, 1, 2, 5, 2].myFilter(
    (element, index, array) => array.indexOf(element) === index
  )
);
