// Exercice 3 : Formatter une liste
// A partir d’un tableau qui contient une liste d’animaux, afficher les séparés par une virgule, 
// mais dans le sens inverse et en majuscules (⚠️ regardez bien l’exemple).
// const mots = [
//     "chat",
//     "chien",
//     "oiseau",
//     "poisson",
//     "souris",
//     "lapin",
//     "tortue",
//     "poule"
// ];
// // Résultat attendu :
// "POULE, TORTUE, LAPIN, SOURIS, POISSON, OISEAU, CHIEN, CHAT"

const mots = [
    "chat",
    "chien",
    "oiseau",
    "poisson",
    "souris",
    "lapin",
    "tortue",
    "poule"  
];

// Faire un tableau
console.table(mots);

// 1 reverse le tableau
mots.reverse();

// 2 transforme le tableau en string
let motsJoin = mots.join(", ");

// 3 mettre en majuscule
let resultat = motsJoin.toUpperCase()

// 4 Afficher le resultat
console.log(resultat);

