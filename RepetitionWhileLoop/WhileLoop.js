//UC1
let n = process.argv[2];
let i=1;
let number=0;
while(i<=n && number<256){
    number= Math.pow(2,i);
    console.log(number);
    i++;
}

//UC2
/*let magicNumber=25;
let input = process.argv[3];
while(input!=magicNumber){
    if(input<magicNumber)
        input *= 2;
    else
        input /= 2; 
}
console.log("Magic Number is reached: "+input);*/

//UC3
let counter1=0;
let counter2=0;
while(counter1!=11 && counter2!=11){
    let m = Math.floor(Math.random()*10)%2;
    if(m==0){
        counter1++;
    }
    else
        counter2++;
}
if(counter1==11)
    console.log("Player who picked heads won");
else
    console.log("Player who picked Tails won");    
