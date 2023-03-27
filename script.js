const quoteTextElement = document.getElementById("quote-text");
const quoteAuthorElement = document.getElementById("quote-author");
const newQuoteButton = document.getElementById("new-quote-btn");

// Fetch a random quote from the API
async function getQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  quoteTextElement.innerHTML = data.content;
  quoteAuthorElement.innerHTML = `- ${data.author}`;
}

// Load a new quote when the button is clicked
newQuoteButton.addEventListener("click", getQuote);

getQuote(); // Load a quote when the page first loads
