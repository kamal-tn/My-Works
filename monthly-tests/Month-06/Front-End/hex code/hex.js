const submit = document.getElementById('submit');

submit.addEventListener('click',generateColor);

function generateColor() {
    const code = document.getElementById('color').value;

    if (code.length < 7) {
        alert("Enter a Valid Hex code!!");
    }

    document.getElementById('body').style.backgroundColor = code;
    
}