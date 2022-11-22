const output = document.getElementById('output');
const length = document.getElementById('length');
const upper = document.getElementById('uppercase');
const lower = document.getElementById('lowercase');
const number = document.getElementById('number');
const splChar = document.getElementById('symbol');
const create = document.getElementById('create');


const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "~!@#$%^&*()_+=|";

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbol[Math.floor(Math.random() * symbol.length)];
}

create.addEventListener('click',generatePassword);

function generatePassword() {
    const len = length.value;
    let password = "";
for (let i = 0; i < len; i++) {
    const x = generateX();
    password += x;
}
    output.innerText = password;
}

function generateX() {
    const ele = [];
if (upper.checked) {
    ele.push(getUppercase());
}
if (lower.checked) {
    ele.push(getLowercase());
}
if (number.checked) {
    ele.push(getNumber());
}
if (splChar.checked) {
    ele.push(getSymbol());
}
if (ele.length === 0) return "";
    return ele[Math.floor(Math.random() * ele.length)];
}
    
