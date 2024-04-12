// Exercice 6 : Calculs
// Créez quatre fonctions distinctes pour l'addition, la soustraction, la multiplication et la division. 
// Chaque fonction doit vérifier si les arguments a et b  sont des nombres; si ce n'est pas le cas, retournez "paramètres incorrects". Sinon, effectuez l'opération correspondante et retournez le résultat.
// addition(a, b)
// soustraction(a, b)
// multiplication(a, b)
// division(a, b)

function addition(a, b) {
    
    if (typeof a === 'number' && typeof b === 'number') {
         return "parametres incorrects" 
    } else {
        return a + b
    }
    
    
    
}
let resultat = addition(50, 50);
console.log(resultat)

function soustraction(a, b) {
    
    if (typeof a === 'number' && typeof b === 'number') {
        return "parametres incorrects" 
   } else {
       return a - b
   }
    
    
    
}
let resultat2 = soustraction(50, 30);
console.log(resultat2)

function multiplication(a, b) {
    
    if (typeof a === 'number' && typeof b === 'number') {
        return "parametres incorrects" 
   } else {
       return a * b
   }
    
    
    
}
let resultat3 = multiplication(50, 50);
console.log(resultat3)

function division(a, b) {
    
    if (typeof a === 'number' && typeof b === 'number') {
        return "parametres incorrects" 
   } else {
       return a / b
   }
    
    
    
}
let resultat4 = division(60, 30);
console.log(resultat4)