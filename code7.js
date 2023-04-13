// Q7

function palidrome(data){
    let newString = "";
    
    for(let i= data.length-1; i>=0; i-- ){
        newString= newString + data[i]
    }
    if(newString === data){
        return true;
    }
    return false;
}
let str = "level"

console.log(palidrome(str));