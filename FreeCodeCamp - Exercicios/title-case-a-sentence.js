// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    })
    .join(" ");
}

//Solução usando Regular Expression
// (ela aceita ate simbolos)
// function titleCase(str) {
//   return str
//     .toLowerCase()
//     .replace(/(^|\s)\S/g, L => L.toUpperCase());
// }

//Outra forma de fazer usando metodos de array e de string
// function titleCase(str) {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
//     .join(" ");
// }

console.log(titleCase("бабушка курит трубку"));

console.log(titleCase("I'm a little tea pot"));

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

console.log(titleCase("sHoRt AnD sToUt"));
