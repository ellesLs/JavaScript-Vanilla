/*We have defined a function, filteredArray, which takes arr, a nested array,
and elem as arguments, and returns a new array.
elem represents an element that may or may not be present on one or more of the arrays nested within arr.
Modify the function, using a for loop,
to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.*/

function filteredArray(arr, elem) {
  let newArr = [];

  for (let item of arr) {
    if (!item.includes(elem)) {
      newArr.push([...item]);
    }
  }

  // versão usando for
  // for(let j = 0; j <= arr.length-1; j++) {
  //   let auxArr = arr[j]
  //   if(!auxArr.includes(elem)) {
  //     newArr.push(auxArr)
  //   }
  // }

  // versão usando o metodo filter
  // newArr = arr.filter((item) => !item.includes(elem))

  return newArr;
}

console.log(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6],
    ],
    18
  )
);

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

console.log(
  filteredArray(
    [
      ["trumpets", 2],
      ["flutes", 4],
      ["saxophones", 2],
    ],
    2
  )
);

console.log(
  filteredArray(
    [
      ["amy", "beth", "sam"],
      ["dave", "sean", "peter"],
    ],
    "peter"
  )
);
