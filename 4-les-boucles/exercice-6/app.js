let message = prompt('Veuillez saisir votre mot de passe.');

const motDePasse = 'lamborghini';

let propos = prompt('Mot de passe incorrect, essayez à nouveau.');

while (propos !== motDePasse) {
    message = prompt('Veuillez saisir votre mot de passe.');
}   
console.log('Accès autorisé.');