function chekingAllArrayItems(arr) {
  return arr.every((item) => item === arr[0]);

  // versão usando Set
  // return new Set(arr).size === 1
}

console.log(chekingAllArrayItems([1, 1, 1, 1]));

console.log(chekingAllArrayItems(["test", "test", "test"]));

console.log(chekingAllArrayItems([1, 1, 1, 2]));

console.log(chekingAllArrayItems(["10", 10, 10, 10]));
