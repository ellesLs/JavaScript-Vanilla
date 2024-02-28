function checkIfMinutesIsLess(a, b) {

    //A minha forma usando os milissegundos e vendo se sao menores ou igual
    return Math.abs((a.getTime() - b.getTime())) <= 3600000;

    // o meoto do jschallenger dividindo a subtração das 2 datas e 
    // return Math.abs(a - b) / 1000 / 60 <= 60

}

console.log(checkIfMinutesIsLess(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')))

console.log(checkIfMinutesIsLess(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00')))

console.log(checkIfMinutesIsLess(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00')))

console.log(checkIfMinutesIsLess(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00')))