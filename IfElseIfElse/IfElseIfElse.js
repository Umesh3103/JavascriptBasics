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


