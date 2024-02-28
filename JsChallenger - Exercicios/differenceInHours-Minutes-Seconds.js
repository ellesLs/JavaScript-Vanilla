function myFunction(a, b) {
  // Diferença em segundos
  // return Math.abs(a - b)  / 1000  ;
  let sec = Math.abs(a - b) / 1000;

  // Diferença em minutos
  // return Math.abs(a - b)  / 1000 / 60 ;
  let min = Math.abs(a - b) / 1000 / 60;

  // Diferença em horas
  // return Math.abs(a - b)  / 1000 / 60 / 60 ;
  let hrs = Math.abs(a - b) / 1000 / 60 / 60;

  const date = new Date();

  return { hrs, min, sec };
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/02 08:00:00"))
);

//console.log(myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00')));

// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
