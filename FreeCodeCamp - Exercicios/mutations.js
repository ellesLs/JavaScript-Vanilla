/*Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.*/

function mutation(arr) {
  // Minha solução
  let letters = arr[1].toLowerCase().split("");
  let word = arr[0].toLowerCase();
  return letters
    .map((item) => word.includes(item))
    .reduce((acc, item) => acc === item);

  // Solução usando um for normal
  // const test = arr[1].toLowerCase();
  // const target = arr[0].toLowerCase();
  // for(let i = 0; i < test.length; i++) {
  //   if(target.indexOf(test[i]) < 0) {
  //     return false;
  //   }
  // }
  // return true;

  //

  // Solução com every e indexOf ou includes
  // return arr[1]
  // .toLowerCase()
  // .split("")
  // .every(letter => arr[0].toLowerCase().indexOf(letter) !== -1);
}

// Outra solução so que nao tao recomendada por causa do ternarios alinhados
// function mutation([ target, test ], i = 0) {
//   target = target.toLowerCase();
//   test = test.toLowerCase();
//   return i >= test.length
//     ? true
//     : !target.includes(test[i])
//       ? false
//       : mutation([ target, test ], i + 1);
// }

// Uma solução com new regexExp e desestruturação
// function mutation([elem1, elem2]) {
//   const regex = new RegExp(`[^${elem1}]`, 'i');
//   return !regex.test(elem2);
// }

console.log(mutation(["hello", "hey"]));

console.log(mutation(["Mary", "Army"]));

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
