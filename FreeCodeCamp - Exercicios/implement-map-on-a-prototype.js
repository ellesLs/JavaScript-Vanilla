/*Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().
You should not use the built-in map method.
The Array instance can be accessed in the myMap method using this.*/

Array.prototype.myMap = function (callback) {
  const newArray = [];

  // minha versão
  for (let i = 0; i < this.length; i++) {
    newArray[i] = callback(this[i], i, this);
  }

  // outras versoes
  // for (let i = 0; i < this.length; i++) {
  //   newArray.push(callback(this[i], i, this));
  // }

  // this.forEach((element, index, originalArr) =>
  //   newArray.push(callback(element, index,originalArr))
  // );

  return newArray;
};

console.log([23, 65, 98, 5, 13].myMap((item) => item * 2));

console.log(
  ["naomi", "quincy", "camperbot"].myMap((element) => element.toUpperCase())
);

console.log(
  [1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])
);
