// ---------> strongly typed language
// int a = 5;
// string b = 'hello';
// boolean c = true;
// object student = {name: 'hero', id: 55};
// int[] numbers = [22, 44, 20];
// string[] name = ['anik', 'joy'];




// -----> javascript is dynamic type language


// -------->primitive type data
const a = 5;
const b = 'job';
const isTrue = true;


// -------->non-primitive type data
const ages = [22, 44, 70];
const student = {name : 'apron', class: 9};
// console.log(typeof a, typeof b, typeof isTrue, Array.isArray(ages), typeof student);


// -----------------------------

let x = 5;
let y = x;
// console.log(x, y);
y = 7;
// console.log(x, y);


// ------------------------------

const p = {job: 'web developer'};
const q = p;
q.job = 'front end developer'
console.log(p, q);

