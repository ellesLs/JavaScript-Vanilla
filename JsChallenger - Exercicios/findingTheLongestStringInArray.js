function findingTheLongestStringInArray(arr) {
  return arr.reduce((a, b) => (a.length >= b.length ? a : b));

  //return arr.sort((a, b) => b.length - a.length)[0];

  // let sortArry = arr.sort((a, b) => b.length - a.length);
  // return sortArry[0];
}

console.log(findingTheLongestStringInArray(["help", "me"]));

console.log(findingTheLongestStringInArray(["I", "need", "candy"]));
