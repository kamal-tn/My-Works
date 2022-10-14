const a = document.getElementById('input').value;
const b = document.getElementById('push');
const c = document.getElementById('pop');
const output = document.getElementById('stack');

b.addEventListener('click',push);
c.addEventListener('click',pop);

var arr = [];

function print() {
    for (let i=0;i<arr.length;i++){
        output.innerHTML=arr[i];
    }
}

function push(a) {
   
    if (a===null) {
        windows.alert('Enter a value');
    }
    else {
        arr.push(a);
        print();
    }
}

function pop() {
    arr.pop();
    print();
}