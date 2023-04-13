// Q1

function factorial(num){

    if(num < 0){
        
        return "please eneter valid number"
    } else{
        let sum = 1;
        for(let i = num; i >=1; i--){
            sum =  sum *i;
        }
        return sum;
    }
}

























