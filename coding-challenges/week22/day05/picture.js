const button = document.getElementById('button');
button.addEventListener('click',picTure);

function picTure() {
    const pic = fetch("https://dog.ceo/api/breeds/image/random");
    //console.log(pic);
    pic
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        //console.log (data.message);
        document.getElementById('photo').src = data.message;
        })
    .catch((error)=>{
        console.log (error);
    })
}