const motDePasseUser = prompt('Entrer votre mot de passe');
const longueurDuMotDePasseUser = motDePasseUser.length; 


if (longueurDuMotDePasseUser >= 5 && longueurDuMotDePasseUser <= 12){
    console.log(`Mot de passe valide`);
} else {
    console.log(`Mot de passe invalide`);
}