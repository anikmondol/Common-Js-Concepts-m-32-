/*

1. always use  ===
2. comparison doesn't work for non-primitive

*/ 


// const first = 1; 
// const second = true;
const first = []; 
const second = first;

if(first === second){
    console.log(true);
}else{
    console.log(false);
}