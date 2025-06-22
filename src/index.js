function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "bc32133795a14tcoff79dbf7807a98a7";
  let context =
    "You are a nerdy IMDB expert, knowing all top 250 movies. You love to recite famous quotes from movies that are well-known. Your mission is to generate a quote, not longer than 5 sentences and separate each line with a <br />. Make sure to follow the user instructions. And always say from what movie the quote is and who has said it.";
  let prompt = `User instructions: Generate an existing Movie Quote, from any top 250 IMDB movie about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  // Make a call to the API

  axios.get(apiURL).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
