const ques = fetch("https://opentdb.com/api.php?amount=5&category=19&difficulty=easy&type=multiple");
ques
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
    document.getElementById('question').innerHTML = data.results[0].question;
})
.catch((error)=>{
    console.log (error);
})

const next = document.getElementById('next');
next.addEventListener('click',one);
next.addEventListener('click',two);
next.addEventListener('click',three);
next.addEventListener('click',four);

function one(){
    const ques = fetch("https://opentdb.com/api.php?amount=5&category=19&difficulty=easy&type=multiple");
    ques
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        //console.log(data)
        document.getElementById('question').innerHTML = data.results[1].question;
    })
    .catch((error)=>{
        console.log (error);
    })
}

function two(){
    const ques = fetch("https://opentdb.com/api.php?amount=5&category=19&difficulty=easy&type=multiple");
    ques
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        //console.log(data)
        document.getElementById('question').innerHTML = data.results[2].question;
    })
    .catch((error)=>{
        console.log (error);
    })
}

function three(){
    const ques = fetch("https://opentdb.com/api.php?amount=5&category=19&difficulty=easy&type=multiple");
    ques
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        //console.log(data)
        document.getElementById('question').innerHTML = data.results[3].question;
    })
    .catch((error)=>{
        console.log (error);
    })
}

function four(){
    const ques = fetch("https://opentdb.com/api.php?amount=5&category=19&difficulty=easy&type=multiple");
    ques
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        //console.log(data)
        document.getElementById('question').innerHTML = data.results[4].question;
    })
    .catch((error)=>{
        console.log (error);
    })
}