// Exercice 4 : code nucléaire

// > Créez un fonction qui demande une confirmation à l’utilisateur(`confirm()`) avec le message : 
// `“Avez vous les droits pour accéder aux codes nucléaires ? Soyez honnête s’il vous plait, cela peut être dangereux.”`. 
// Si l’utilisateur accepte, afficher une `alerte dans la console` avec le code de votre choix (ex : 1234). 
// Sinon affichez `“vous n’avez pas les droits !!”` dans la console.

function check() {
    let estAutorise = confirm(`“Avez vous les droits pour accéder aux codes nucléaires ? Soyez honnête s’il vous plait, cela peut être dangereux.”`)
    if (estAutorise) {
        alert('2709')
    } else {
        alert('vous navez pas les droits !!')
    }
}

check()
check()