const arr = ["apple","orange","apple","orange","apple"]
let count = 0;
let count1 = 0;
 arr.forEach (element =>{
     if (element==="apple"){
         count += 1;
     }
     else if (element==="orange"){
         count1 += 1;
     }
 })
console.log (count, count1)