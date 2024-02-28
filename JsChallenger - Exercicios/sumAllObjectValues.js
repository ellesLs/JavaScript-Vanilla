function sumAllObjectValues(a) {
   
    return Object.values(a).reduce((sum, cur) => sum + cur, 0);
    //return Object.entries(a).reduce((sum, [key, val]) => sum + val, 0);
  
}


console.log(sumAllObjectValues({a:1,b:2,c:3}))

console.log(sumAllObjectValues({j:9,i:2,x:3,z:4}))

console.log(sumAllObjectValues({w:15,x:22,y:13}))
