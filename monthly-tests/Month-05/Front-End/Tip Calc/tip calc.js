
const calc = document.getElementById('submit');

calc.addEventListener('click',calculate);

function calculate() {
    const amount = document.getElementById('amount').value;
    const percentage = document.getElementById('percent').value;
    result = amount*(percentage/100);

    const tip = document.getElementById('tip');
    tip.value = result;

    const total = document.getElementById('total');
    total.value = Number(result)+Number(amount);
}