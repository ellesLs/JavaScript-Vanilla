// Fill in the body of the add function so it uses currying to add parameters x, y, and z.

function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };

  // infinite curring for sum
  // return function(b) {
  //     if(b) return add(a * b);
  //     return a;
  // }
}

console.log(add(10)(20)(30));

// console.log(add(10)(20)(30)()); // for infinite curryng

// console.log(add(1)(2)(3)())
