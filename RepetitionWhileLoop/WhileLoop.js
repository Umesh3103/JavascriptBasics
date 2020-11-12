//UC1
let n = process.argv[2];
let i=1;
let number=0;
while(i<=n && number<256){
    number= Math.pow(2,i);
    console.log(number);
    i++;
}