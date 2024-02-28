function comparingDays(a, b) {
  return a.getDay() === b.getDay();

  // return a.getFullYear() === b.getFullYear() &&
  //        a.getMonth() === b.getMonth() &&
  //        a.getDate()=== b.getDate()
}

console.log(comparingDays(new Date("2000/01/01"), new Date("2000/01/01")));

console.log(comparingDays(new Date("2000/01/01"), new Date("2000/01/02")));

console.log(comparingDays(new Date("2001/01/01"), new Date("2000/01/01")));

console.log(comparingDays(new Date("2000/11/01"), new Date("2000/01/01")));
