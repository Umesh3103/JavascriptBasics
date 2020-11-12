//UC1
let digit = Math.floor(Math.random()*10);
switch(digit){
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
}

//UC2
let digit1 = Math.floor((Math.random()*10)%7)+1;
switch(digit1){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
}   

//UC3
let number = process.argv[2];
let count=0;
if(number<10){
    console.log("Unit");
    return;
}
while(number>=10){
    count++;
    number=number/10;
}

switch(count){
    case 1:
        console.log("Ten");
        break;
    case 2:
        console.log("Hundred");
        break;
    case 3:
        console.log("Thousand");
        break;
    case 4:
        console.log("Ten Thousand");
        break;
    case 5:
        console.log("Lakhs");
        break;
    case 6:
        console.log("Ten Lakhs");
        break;
    case 7:
        console.log("Crore");
        break;
}        

//UC4
let unit = process.argv[3];
//feet to inch
let number1 = unit*12;
//inch to feet
let number2= unit/12;
//feet to meter
let number3 = unit*0.3048;
// meter to feet
let number4 = unit*3.28084;
console.log(unit+" feet to inch is: "+number1);
console.log(unit+" inch to feet is: "+number2);
console.log(unit+" feet to meter is: "+number3);
console.log(unit+" meter to feet is: "+number4);

