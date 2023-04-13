//Q4

function reverse(arr){
    let arr2 = [];
    
    for(let i=0; i<arr.length; i++ ){
   let newStrng = "";
   for (let j = arr[i].length-1; j>=0; j--){
    newStrng = newStrng+arr[i][j];
   }
   arr2.push(newStrng)
         
    }
    return arr2;
}

let arr = ["vikas","kumar", "vikku"]
console.log(reverse(arr));
