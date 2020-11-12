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