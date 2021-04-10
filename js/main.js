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
    
    const nextJoke = randomJoke.textContent = `"${joke}"`;
    return nextJoke
}

//getJoke(); Call the function for Exercise 1

// EXERCISE 5 LEVEL 3 - Call to another joke API randomly

let friendsApi = new Request("https://friends-quotes-api.herokuapp.com/quotes/random");

const friendsJoke = async () => {
    const answer = await fetch(friendsApi);
    const data = await answer.json();
    const {quote, character} = data;

    const friendsJoke = randomJoke.textContent = `"${quote} - ${character}"`;
    return friendsJoke
}

const randomCall = () => {
    let random = Math.floor((Math.random() * 10) + 1);
    let choice;

    if (random >= 1 && random <= 5) {
        choice = getJoke();
    }else if (random >= 6 && random <= 10) {
        choice = friendsJoke();
    }

    return choice;
}


// Event Listener so when the button is clicked the joke calls to a function that will choose  which API
// to call and show on the web
jokeBtn.addEventListener('click',randomCall);

/*------------------------LEVEL 2------------------------------*/

// Store the p tag in a variable

let weather = document.getElementById('weather');

// Call the weather API using fetch with promises

fetch('https://www.el-tiempo.net/api/json/v2/provincias/08') // The fetch request is sent
.then((response) => { 
    return response.json() // Return the response in JSON
})
.then((data) => { // Passes the JSON so it can be showed on screen
    const {today} = data // Desestructuring data
    const {p} = today
    weather.textContent = `El tiempo hoy en Barcelona Provincia: ${p}`;
})
.catch((error) => { // In case there is an error
    console.log(error)
})