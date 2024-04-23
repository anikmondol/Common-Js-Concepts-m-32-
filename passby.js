// primitive types are pass by value

let num1 = 5;
let num2 = 7;

function multiply(a, b){
    a = 20
    const results = a * b;
    return results;
}

// console.log(num1, num2);
// multiply(num1, num2);
// console.log(num1, num2);


// -------------------------------


// ---------->objects and array are pass by reference

const student1 = {name : 'anik', class : 10};
const student2 = {name : 'apu', class : 12};


function convert(a, b){
    a.name = "arpon";
    b.class = 5;
}

console.log(student1, student2);
convert(student1, student2);
console.log(student1, student2);
