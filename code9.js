//Q9

function shorter(str){
    let shortstring= arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i].length< shortstring.length){
            shortstring = arr[i];
        }
    
    }
 return shortstring;
}



let arr = ["vikas", "vikku", "bitu"];

console.log(shorter(arr));
