//Q8

function largest(num){
    let largestNUm =[0]
    for(let i = 1; i<arr.length; i++){
        if(arr[i]> largestNUm){
            largestNUm = arr[i];
        }
    
    }
 return largestNUm;
}


let arr = [ 1,15,25,,5,3,2,8]

console.log(largest(arr));