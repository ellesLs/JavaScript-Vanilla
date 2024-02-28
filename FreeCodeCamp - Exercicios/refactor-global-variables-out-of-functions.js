/*Rewrite the code so the global array bookList is not changed inside either function.
The add function should add the given bookName to the end of the array passed to it and return a new array (list).
The remove function should remove the given bookName from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.*/

// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

function add(arr, bookName) {
  const newArr = [...arr];
  newArr.push(bookName);
  return newArr;
}

function remove(arr, bookName) {
  const newArr = [...arr];
  const book_index = newArr.indexOf(bookName);
  if (book_index >= 0) {
    // Check whether the bookName parameter is in new array.
    newArr.splice(book_index, 1); // Remove the given paramater from the new array.
    return newArr;
  }
}

console.log(bookList);

console.log(add(bookList, "A Brief History of Time"));
console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));
console.log(
  remove(
    add(bookList, "A Brief History of Time"),
    "On The Electrodynamics of Moving Bodies"
  )
);

// uma versão diferente para remover usando metodos

/* This function should add a book to the list and return the list */
// New parameters should come before bookName
// function add(list, bookName) {
//   return [...list, bookName];
// }
/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// function remove(list, bookName) {
//   return list.filter(book => book !== bookName);
// }
