function kitchen(){
    let count = 0;
    return function(){
        return count++;
    }
}

const a = kitchen();
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());

const b = kitchen();
console.log(b());
console.log(b());
console.log(b());