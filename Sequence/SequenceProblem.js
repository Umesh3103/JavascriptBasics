//UC1
let digit = Math.floor(Math.random()*10);
console.log(digit);

// UC2
let diceNumber = Math.floor((Math.random()*10)%6)+1;
console.log("Dice Number is: "+diceNumber);

//UC3
let diceNumber1 = Math.floor((Math.random()*10)%6)+1;
let diceNumber2 = Math.floor((Math.random()*10)%6)+1;
console.log("Addition of two dice Number is: "+(diceNumber1+diceNumber2));

//UC4
let digit1 = Math.floor(Math.random()*90)+10;
console.log(digit1);
let digit2 = Math.floor(Math.random()*90)+10;
console.log(digit2);
let digit3 = Math.floor(Math.random()*90)+10;
console.log(digit3);
let digit4 = Math.floor(Math.random()*90)+10;
console.log(digit4);
let digit5 = Math.floor(Math.random()*90)+10;
console.log(digit5);
let sum = digit1+digit2+digit3+digit4+digit5;
let avg = sum/5;
console.log("Sum is: "+sum+", Average is: "+avg);