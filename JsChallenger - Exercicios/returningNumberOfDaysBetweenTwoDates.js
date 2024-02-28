function returningNumberOfDaysBetweenTwoDates(a, b){

    //let DifferenceInTime = a.getTime() - b.getTime()
    return Math.abs((a - b) / (1000 * 3600 * 24))

    // jschallenger metodo
    // const dif = Math.abs(a - b);
    // return dif / 1000 / 60 / 60 / 24
}


console.log(returningNumberOfDaysBetweenTwoDates(new Date('2020-06-11'), new Date('2020-06-01')));

console.log(returningNumberOfDaysBetweenTwoDates(new Date('2000-01-01'), new Date('2020-06-01')));

