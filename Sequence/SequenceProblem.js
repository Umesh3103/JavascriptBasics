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
let digit2 = Math.floor(Math.random()*90)+10;
let digit3 = Math.floor(Math.random()*90)+10;
let digit4 = Math.floor(Math.random()*90)+10;
let digit5 = Math.floor(Math.random()*90)+10;
let sum = digit1+digit2+digit3+digit4+digit5;
let avg = sum/5;
console.log("Sum is: "+sum+", Average is: "+avg);

//UC5a
let feet = 12;
let inch = 42/feet;
console.log("42 inch is: "+inch+" feet");

//UC5b
let foot = 0.3048;
let number = 60 * 40;
let area = number*foot;
console.log("Rectangle plot for 60 feet *40feet in meters is: "+area);

// UC5c
let totalArea = area * 25;
let AreaInAcre = totalArea * 0.000247;
console.log("Total area in acre is: "+AreaInAcre);