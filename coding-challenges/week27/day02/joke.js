const btn = document.getElementById('button');
btn.addEventListener('click',handleClick);

async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com",{
      headers:{
        Accept: "application/json"
      }});
    return response.json();
  }
  //fetchJoke();

  async function handleClick() {
    const { joke } = await fetchJoke();
    //console.log(joke);
    document.getElementById('text').innerHTML = joke;
  }