const button = document.getElementById('button');
button.addEventListener('click',calc);

function calc() {
    const input = document.getElementById('input').value;
    const words = input.split (',');

    let count = 0;

    for (let i=0;i<words[0].length;i++) {
        if (words[0][i] !== words[1][i]) {
            count++;
        }
    }

    document.getElementById('output').value = count;

}