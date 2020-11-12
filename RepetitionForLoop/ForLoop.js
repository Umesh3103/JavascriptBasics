//UC1
let n = process.argv[2];
for(let i = 1;i<=n;i++){
    let number = Math.pow(2,i);
    console.log(number);
}

//UC2
let digit = process.argv[3];
let harmonicNumber = 1;
for(let i=2;i<=digit;i++){
    harmonicNumber += 1/i;
}
console.log(harmonicNumber);

// UC3 
let p = process.argv[4];
for(let i = 2; i<= Math.sqrt(p);i++){
    if(p%i==0){
        console.log(p+" is not a prime number");
        return;
    }    
}
console.log(p+" is a prime number");