function generateQuote(event) {
  event.preventDefault();

  let quoteElement = document.querySelector("#quote");

  new Typewriter("#quote", {
    strings: ["Preparing Popcorn"],
    autoStart: true,
    delay: 1,
    cursor: "",
    loop: false,
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
