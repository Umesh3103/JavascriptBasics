//UC1
let digit1 = Math.floor(Math.random()*900)+100;
console.log(digit1);
let digit2 = Math.floor(Math.random()*900)+100;
console.log(digit2);
let digit3 = Math.floor(Math.random()*900)+100;
console.log(digit3);
let digit4 = Math.floor(Math.random()*900)+100;
console.log(digit4);
let digit5 = Math.floor(Math.random()*900)+100;
console.log(digit5);

let min = digit1;
let max = digit1;
if(min>digit2){
    min=digit2;
}
if(min>digit3){
    min=digit3;
}
if(min>digit4){
    min=digit4;
}
if(min>digit5){
    min=digit5;
}
if(max<digit2){
    max=digit2;
}
if(max<digit3){
    max=digit3;
}
if(max<digit4){
    max=digit4;
}
if(max<digit5){
    max=digit5;
}
console.log("Minimum value is: "+ min+", Maximum value is: "+max);