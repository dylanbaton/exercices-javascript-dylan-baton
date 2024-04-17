// Exercice 5 : découper une chaine de caractère
// Grace à la méthode slice(), découper la chaine de caractère suivante pour récupérer juste le mot JavaScript. Mettez cette nouvelle chaine dans une variable et afficher la dans la console.
// const phrase = 'Hello, World! I am a JavaScript program.'

// // résultat attendu :

// JavaScript

const phrase = 'Hello, World! I am a JavaScript program.';

console.log(phrase)

const motJavaScript = phrase.slice(20, 31);

console.log(motJavaScript);