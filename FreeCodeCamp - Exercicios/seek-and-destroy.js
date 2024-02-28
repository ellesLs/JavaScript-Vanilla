/*You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.

The function must accept an indeterminate number of arguments, also known as a variadic function.
You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.*/

// Minha versão usando spreed ao vez de arguments
function destroyer(arr, ...vals) {
  return arr.filter((elem) => !vals.includes(elem));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

console.log(
  destroyer(
    [
      "possum",
      "trollo",
      12,
      "safari",
      "hotdog",
      92,
      65,
      "grandma",
      "bugati",
      "trojan",
      "yacht",
    ],
    "yacht",
    "possum",
    "trollo",
    "safari",
    "hotdog",
    "grandma",
    "bugati",
    "trojan"
  )
);

// outra Forma usando arguments e for loop
// function destroyer(arr) {
//   const valsToRemove = Object.values(arguments).slice(1);
//   const filteredArray = [];

//   for(let i = 0; i < arr.length; i++) {
//     let removeElement = false;
//     for(let j = 0; j < valsToRemove.length; j++) {
//       if(arr[i] === valsToRemove[j]) {
//         removeElement = true;
//       }
//     }
//     if(!removeElement) {
//       filteredArray.push(arr[i]);
//     }
//   }
//   return filteredArray;
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// uma forma usando arguments e filter/includes
// function destroyer(arr) {
//   const valsToRemove = Array.from(arguments).slice(1);
//   return arr.filter((val) => !valsToRemove.includes(val));
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
