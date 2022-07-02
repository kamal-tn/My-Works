const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function sum (a,b){
  return a+b;
}
let avgArr = array.reduce(sum,0)
console.log (avgArr/array.length)