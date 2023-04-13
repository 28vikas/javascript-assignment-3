// Q3

function average(num){
    sum = 0;
    for(let i = 0; i<arr.length; i++ ){
        sum = sum + num[i];
    }
    
    return sum/arr.length;
}

let arr = [4,2,8,3,5];

console.log(average(arr))