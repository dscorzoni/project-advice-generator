// Catching elements
const quoteHeader = document.querySelector(".advice-id");
const quoteText = document.querySelector(".advice-content");
const diceButton = document.querySelector("button");

const fetchData = () => {
    // Fecthing the random advice data
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // Changing the content and header with new advice:
            quoteHeader.innerHTML = data.slip['id'];
            quoteText.innerHTML = data.slip['advice'];
        })
}

// Adding event listener to the button
diceButton.addEventListener('click', (e) => {
    // Prevent detaulf behavior
    e.preventDefault();
    fetchData();
})

// Fetching the first advice on page load:
window.onload = function() {
    fetchData();
}