function countNumberNegatives(a) {
  return a.filter((item) => item < 0).length;
}

console.log(countNumberNegatives([1, -2, 2, -4]));

console.log(countNumberNegatives([0, 9, 1]));

console.log(countNumberNegatives([4, -3, 2, 1, 0]));
