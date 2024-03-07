// Résultat attendu pour 10 et 2, dans la console :

// 10 x 2 = 20
// 10 - 2 = 8
// 10 + 2 = 12
// 10 / 2 = 5
// 10 exposant 2 = 100

let chiffre1 = prompt('Donne moi un premier chiffre');
chiffre1 = parseInt(chiffre1);
let chiffre2 = prompt('Donne moi un deuxieme chiffre');
chiffre2 = parseInt(chiffre2);

// console.log(chiffre * chiffre2);
// console.log(chiffre1 - chiffre2);
// console.log(chiffre1 + chiffre2);
// console.log(chiffre1 / chiffre2);
// console.log(chiffre1 ** chiffre2);

let multiplication = chiffre1 * chiffre2;
console.log(`${chiffre1} * ${chiffre2} = ${multiplication}`);

let soustraction = chiffre1 - chiffre2;
console.log(`${chiffre1} - ${chiffre2} = ${soustraction}`);

let addition = chiffre1 + chiffre2;
console.log(`${chiffre1} + ${chiffre2} = ${addition}`);

let division = chiffre1 / chiffre2;
console.log(`${chiffre1} / ${chiffre2} = ${division}`);

let exposant = chiffre1 ** chiffre2;
console.log(`${chiffre1} ** ${chiffre2} = ${exposant}`);