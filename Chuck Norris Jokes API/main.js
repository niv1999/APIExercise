async function displayJoke() {
    const jokePar = document.getElementById("jokePar");

    const url = "https://api.chucknorris.io/jokes/random";

    // AJAX request for a Chuck Norris Joke:
    const response = await fetch(url);
    const jokeObject = await response.json();
    const joke = jokeObject.value;
    
    jokePar.innerText = joke;
}