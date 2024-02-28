/*Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method,
which was introduced in ES2015. But for the purpose of this challenge,
we would like you to use one of the JavaScript substring methods instead.*/

function confirmEnding(str, target) {
  let strSize = str.length;
  let targetSize = target.length;

  // Verificando usando substring
  return str.substring(strSize - targetSize, strSize) === target;

  //verificando usando slice
  // return str.slice(strSize - targetSize) === target;
  // return str.slice(-target.length) === target

  // verificando com regex
  // let regex = new RegExp(target + "$", "i")
  // return regex.test(str);
}

console.log(confirmEnding("Bastian", "n"));
