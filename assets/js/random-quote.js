const generateQuote = function() {
    const quotes = [
    {
        quote: "We’re all stories, in the end. Just make it a good one, eh?",
        author: "The Doctor (Doctor Who)"
    },
    {
        quote: "You asked me if you were a good man, and the answer is ... I don't know. <br/>But I think you try to be. And I think that's probably the point.",
        author: "Clara Oswald (Doctor Who)"
    },
    {
        quote: "Au début on naît, à la fin on meurt, et entre les deux il se passe des trucs.",
        author: "Kyan Khojandi (Bref.)"
    },
    {
        quote: "Que la force me soit donnée de supporter ce qui ne peut être changé et le courage de changer ce qui peut l'être ; mais aussi la sagesse de distinguer l'un de l'autre.",
        author: "Marc Aurèle"
    },
    {
        quote: "Oublie que t'as aucune chance, vas-y, fonce. <br/>On sait jamais, sur un malentendu ça peut marcher.",
        author: "Jean-Claude Dusse (Les Bronzés font du Ski)"
    },
    {
        quote: "Se passionner pour tout et ne tenir à rien.",
        author: "Jean-Louis Barrault"
    },
    {
        quote: "Don't tell them your ideas, show them your results.",
        author: "Sakib Tamboli"
    },
    {
        quote: "Le sens de la vie est juste d'être vivant. C'est tellement évident et simple. <br/>Et pourtant, tout le monde se précipite dans une grande panique comme s'il était nécessaire d'accomplir quelque chose au-delà de soi-même.",
        author: "Alan Watts"
    },
    {
        quote: "Change is hard at first, messy in the middle, and gorgeous at the end.",
        author: "Robin Sharma"
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