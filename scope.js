function add(a, b){
    var total = a+ b;
    console.log(a, b);
    if(b > 5){
        var sum = 25 + a + b;
    }else{
        const sum = 5 + a + b;
        var current = sum;
    }
    console.log(current);
    console.log(sum);
    return total;
}



add(5, 3)
