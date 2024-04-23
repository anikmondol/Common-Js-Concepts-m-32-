function greeting(greetingHandler, name){
    greetingHandler(name)
}

// const name = 'anik';
// const number = 45;
// const numbers = [11, 20, 44];
// const laptop = {name : 'hp', price : 2000}


function greetingHandler(name){
    console.log(`good morning ${name}`);
}

function greetingEvening(name){
    console.log(`good evening ${name}`);
}

function greetingGoodNight(name){
    console.log(`good night ${name}`);
}

greeting(greetingHandler, 'anik');
greeting(greetingEvening, 'apu');
greeting(greetingGoodNight, 'arpon');

// -----------------------------


document.getElementById('btn').addEventListener('click', function(){
    console.log('submit button clicked');
})