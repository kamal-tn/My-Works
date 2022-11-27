const button = document.getElementById('button');
button.addEventListener('click',generateQuote);


function generateQuote() {
const quotes = fetch("https://type.fit/api/quotes")

quotes
.then((response)=>{
    //console.log(response)
    return response.json();
})
.then((data)=>{
    const index = data[Math.floor(Math.random() * 1000)];
    const quo = index.text;
    let auth = index.author;

    if(auth == null) {
        auth = "Anonymous";
    }

    document.getElementById('text').innerHTML = '"'+quo+'"';
    document.getElementById('auth').innerHTML = "~"+auth;
})
.catch((error)=>{
    console.log(error);
})
}