var numOne = document.getElementById('First');
var numTwo = document.getElementById('Second');
var addSum = document.getElementById('Result');
const final = document.getElementById('Submit');

final.addEventListener('click',add);

function add() {
var one = parseFloat(numOne.value) || 0;
var two = parseFloat(numTwo.value) || 0;
addSum.innerText = one+two;
}