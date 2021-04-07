/*------------------------LEVEL 1------------------------------*/

// Store the HTML elements in variables
let randomJoke = document.getElementById('joke');
let jokeBtn = document.getElementById('jokeBtn');

// Parameters of the call to the API
const header = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

// Store the url API
let apiUrl = new Request("https://icanhazdadjoke.com");

//Function complete for exercise 2
const getJoke = async () => {
    const response = await fetch(apiUrl,header); // Get the response from the url
    const data = await response.json(); // Convert the response into JSON
    const {joke} = data; // Get the joke from the JSON Object
    //console.log(joke); Exercise 1
    
    const nextJoke = randomJoke.textContent = joke;
    return nextJoke
}

//getJoke(); Call the function for Exercise 1

// Event Listener so when the button is clicked the joke appears on the web
jokeBtn.addEventListener('click',getJoke);