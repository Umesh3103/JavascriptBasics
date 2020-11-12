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


