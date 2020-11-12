//UC1
let digit = Math.floor(Math.random()*10);
if(digit==1)
    console.log("one");
else if(digit ==2)
    console.log("Two");
else if(digit ==3)
    console.log("Three");
else if(digit ==4)
    console.log("Four");
else if(digit ==5)
    console.log("Five");
else if(digit ==6)
    console.log("Six");        
else if(digit ==7)
    console.log("Seven");
else if(digit ==8)
    console.log("Eight");
else if(digit ==9)
    console.log("Nine");
else
    console.log("Zero");

//UC2
let digit1 = Math.floor((Math.random()*10)%7)+1;   
if(digit1==1)
    console.log("Sunday");
else if(digit1==2)
    console.log("Monday");
else if(digit1==3)
    console.log("Tuesday");
else if(digit1==4)
    console.log("Wednesday");
else if(digit1==5)
    console.log("Thursday");
else if(digit1==6)
    console.log("Friday");
else if(digit1==7)
    console.log("Saturday");

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
if(count==1)
    console.log("Ten");
else if(count==2)
    console.log("Hundred");
else if(count==3)
    console.log("Thousand");
else if(count==4)
    console.log("Ten Thousand");
else if(count==5)
    console.log("Lakhs");
else if(count==6)
    console.log("Ten Lakhs");
else if(count==7)
    console.log("Crore");


//UC4
let a = process.argv[3];
let b = process.argv[4];
let c = process.argv[5];
console.log(a);
console.log(b);
console.log(c);
let operation1 = Number(a)+b*c;
let operation2 = (a%b)+Number(c);
let operation3 = Number(c)+(a/b);
let operation4 = (a*b)+Number(c);
console.log(operation1);
console.log(operation2);
console.log(operation3);
console.log(operation4);

let max=Number.MIN_VALUE;
let min=Number.MAX_VALUE;

if(operation1>max)
    max=operation1;
if(operation2>max)
    max=operation2;
if(operation3>max)
    max=operation3;
if(operation4>max)
    max=operation4;

if(operation1<min)
    min=operation1;
if(operation2<min)
    min=operation2;
if(operation3<min)
    min=operation3;
if(operation4<min)
    min=operation4; 
console.log("Minimum value is: "+min);
console.log("Maximum value is: "+max);      


