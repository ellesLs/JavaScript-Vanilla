/* Write a function that splits an array (first argument) into groups the length of size (second argument) 
 and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
  // Minha solução
  let sizeArr = arr.length;
  let newArr = [];
  for (let i = 0; i < Math.ceil(sizeArr / size); i++) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;

  // Uma solução com map
  // return [...Array(Math.ceil(arr.length/size))].map((item, index) => arr.slice(index * size, (index+1) * size));
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
