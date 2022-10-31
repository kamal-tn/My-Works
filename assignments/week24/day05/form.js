const submit = document.getElementById('submit');

submit.addEventListener('click',function(){
    const fname = document.getElementById('name').value;
    const lname = document.getElementById('l-name').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const gender = document.getElementById('gender').value;
    const hobby = document.getElementById('hobby').value;

    const promise = fetch("http://localhost:3000/users",{method:"post"});

    promise
    .then(()=>{
        console.log("success");
    })
    .catch((err)=>{
        err;
    });
});