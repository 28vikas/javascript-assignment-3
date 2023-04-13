// Q5

function propertvalue(arr, prop){
    let arr2 = [];
    for(let i = 0; i<arr.length; i++){
      arr2.push(arr[i][prop])
    }
    return arr2;
}

let arr = [
    {name : "vikas", age : 26},
    {name: "vikku", age : 28}
];

console.log(propertvalue(arr,"age"));