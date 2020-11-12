//UC1
let chooseConversion = process.argv[2];
let input = process.argv[3];
function findTemp(temp,input){
    switch(temp){
        case ("degC"):
            switch(true){
                case input>32 && input <212:
                    let degC = (input-32)* 5/9;
                return degC;
                break;
                default:
                    console.log("Enter valid input");
                    return 0;
            }  
        case("degF"):
            switch(true){
                case input >0 && input <100: 
                    let degF = (input*9/5)+32;
                    return degF;
                    break;
                default:
                    console.log("Enter valid input");
                    return 0;    
            }    
    }  
}
let answer = findTemp(chooseConversion,input);
if(answer!=0){
    console.log(answer);
}

// UC2
let number = process.argv[4];
function getPalindrome(n){
    let copy = 0;
    let digit=0;
    while(n>0){
        digit= n%10;
        copy = copy *10 +digit;
        n = Number.parseInt(n/10);
    }
    return copy;
}

let ans = getPalindrome(number);
if(ans==number){
    console.log(number+" is a palindrome number");
}
else
    console.log(number+" is not a palindrome number");

//UC3
  let m = process.argv[5];
  function checkPrime(n){
      for(let i = 2; i<Math.sqrt(n);i++){
          if(n%i==0){
              return false;
          }
      }
      return true;
  }  

let sol = checkPrime(m);
if(sol == true){
    let pal= getPalindrome(m);
    let c = checkPrime(pal);
    if(c == true){
        console.log("A prime number's palindrome is also a prime number");

    }
}  
else{
    console.log("Given number is not prime");
}


