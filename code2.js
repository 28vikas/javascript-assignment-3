// Q2 

function reverse(str){
    backward = "";
    for (let i = str.length-1; i>=0; i--){
         backward = backward + str[i];
    }
    return backward;
}

console.log(reverse("vikas"))