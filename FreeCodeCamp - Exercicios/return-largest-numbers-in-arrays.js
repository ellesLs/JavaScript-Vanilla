/* Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].*/

// Minha versão usando map e reduce
function largestOfFour(arr) {
  return arr.map((item) =>
    item.reduce((longest, num) => Math.max(longest, num))
  );
}

// versão do ES6 usando  spread operator
// function largestOfFour(arr) {
//   return arr.map((item) => Math.max(...item))
// }

// usando apply e bind Versão do js vanilla
// function largestOfFour(arr) {
//   return arr.map(Function.apply.bind(Math.max, null))
// }

//Usando apenas laços for padroes
// function largestOfFour(arr) {
//   const results = [];
//   for (let i = 0; i < arr.length; i++) {
//     let largestNumber = arr[i][0];
//     for (let j = 1; j < arr[i].length; j++) {
//       if (arr[i][j] > largestNumber) {
//         largestNumber = arr[i][j];
//       }
//     }
//     results[i] = largestNumber;
//   }

//   return results;
// }

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ])
);

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);

// console.log([-72, -3, -17, -10].reduce((longest, num) => Math.max(longest, num)))
