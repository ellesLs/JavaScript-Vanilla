function mergeArraysAndRemoveDuplicatesSorting(a, b) {
  let newArray = [a, b];
  return [...new Set(newArray.flat())].sort((a, b) => a - b);

  //return [...new Set([...a, ...b])].sort((x, y) => x - y);
}

console.log(mergeArraysAndRemoveDuplicatesSorting([1, 2, 3], [3, 4, 5]));

console.log(
  mergeArraysAndRemoveDuplicatesSorting(
    [-10, 22, 333, 42],
    [-11, 5, 22, 41, 42]
  )
);
