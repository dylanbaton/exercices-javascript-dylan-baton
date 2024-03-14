let motDePasseUser = prompt(`Veuillez entrer un mot de passe.`);

let motdePassePerso = `dylan`;

if (motDePasseUser === motdePassePerso){
    console.log(`OK`);
} else {
    alert(`Acccès interdit`);
}