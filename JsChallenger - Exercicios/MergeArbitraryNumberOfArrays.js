function MergeArbitraryNumberOfArrays(...arrays) {

    // flat é para concatenar varios arrays juntos
    return arrays.flat()

    // usando um for pra fazer
    // let = newArray = [];
    // for(let i = 0; i < arrays.length; i++){
    //     newArray.push(...arrays[i]);
    // }
    // return newArray 
}


console.log(MergeArbitraryNumberOfArrays([1, 2, 3], [4, 5, 6]));

console.log(MergeArbitraryNumberOfArrays(['a', 'b', 'c'], [4, 5, 6]));

console.log(MergeArbitraryNumberOfArrays([true, true], [1, 2], ['a', 'b'])
)