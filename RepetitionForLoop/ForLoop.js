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

// UC3,UC4 
let n1 = process.argv[4];
let n2 = process.argv[5];
for(let i = Number(n1)+1; i< Number(n2);i++){
    let flag=0;
    for(let j=2;j<=Math.sqrt(i);j++){
        if(i%j==0){
            flag = 1;
            break;
        }
    }
    if(flag==0)
        console.log(i);  
}

// UC5
let factorial = process.argv[6];
let sum=1;
for(let i = factorial;i>0;i--){
    sum = sum*i;
}
console.log(sum);