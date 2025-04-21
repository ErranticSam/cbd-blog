const generateQuote = function() {
    const quotes = [
    {
        quote: "We’re all stories, in the end. Just make it a good one, eh?",
        author: "The Doctor (Doctor Who)"
    },
    {
        quote: "You asked me if you were a good man, and the answer is ... I don't know. <br/>But I think you try to be. And I think that's probably the point.",
        author: "Clara Oswald (Doctor Who)"
    }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("rng-quote").innerHTML = "&ldquo;" + quotes[arrayIndex].quote + "&rdquo;";
    document.getElementById("rng-author").innerHTML = "&mdash; " + quotes[arrayIndex].author;

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}