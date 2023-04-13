
// Q 10

let arr = [
    {fname: "vikas", age : 25}, {fname : "mohit", age: 28}
]

function highestvalue(arr, prop){
    let max = 0
    for(let i = 0; i<arr.length; i++){

         for(let key in arr[i]){
            if(key === prop){
                if(arr[i][key]>max){
                    max = arr[i][key]
                }

            }
         }

    }
    for(let i = 0; i<arr.length; i++){

        for(let key in arr[i]){
           if(key === prop){
               if(arr[i][key]==max){
                   max = arr[i][key]
                   return arr[i]
               }

           }
        }

   }


}

console.log(highestvalue(arr,"age"))