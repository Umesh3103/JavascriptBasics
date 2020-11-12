//UC1
let n = process.argv[2];
let i=1;
let number=0;
while(i<=n && number<256){
    number= Math.pow(2,i);
    console.log(number);
    i++;
}

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
    

//UC4
let money = 100;
let counter=0;
while(money>0 && money<200){
    let m = Math.floor(Math.random()*10)%2;
    if(m==0)
        money--;
    else
        money++;
    counter++;        
}
console.log(counter+" bets were played");
if(money==0){
    console.log("You lost all the money");
}
else
    console.log("You reached your goal "+money);