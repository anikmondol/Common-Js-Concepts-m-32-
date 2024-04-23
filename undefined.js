/*
8 ways to get undefine

1. variable that is not initialized will give undefined
2. function with no return 
3. parameter that is not passed will be undefined
4. if return has nothing no the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing array elements outside of the index range will give you undefined
7. deleting an element inside an array
9. set a value directly to undefined

*/

// -------------------
let first;
// console.log(first);

// ----------------------

function second(a, b) {
    const total = a + b;
}

// console.log(second(5, 2));

// -----------------------

function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

// third(10, 20, 1);

// ------------------------

function noNegative(a, b){
    if(a < 0 || b < 0){
        return 
    }
    return a + b;
}

const total = noNegative(2, -3);
// console.log(total);

// -----------------------

const fifth = {id : 2, name : 'apu'};
// console.log(fifth.name, fifth.class);

// -------------------------

const sixth = [4, 5, 10];

// console.log(sixth[1], sixth[10]);

// -----------------------

const seventh = [4, 5, 10];

delete seventh[1]; // you should not do it. instead use splice

// console.log(seventh[1], seventh[10]);
// console.log(seventh);

// --------------------

const eighth = undefined;
// console.log(eighth);


// ------------------

const ninth = null;
// const data = {results : [], updated : null}

// ---------------------

console.log(typeof undefined); // ans undefined
console.log(typeof null); // ans objects
