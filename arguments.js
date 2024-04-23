// ------> array like object



function sum(a, b, c, d){
    // console.log(arguments);
    // console.log(arguments[5]);
    // console.log(typeof arguments);
    // for(let i = 1; i < arguments.length; i++){
    //     console.log(arguments[i]);
    // }
    // const args = [...arguments];
    // console.log(args);

    const results = a + b + c + d;
    return results;
}

// sum(10, 12, 33, 44, 88, 55, 74);
// console.log(sum.length);
console.log(typeof sum);