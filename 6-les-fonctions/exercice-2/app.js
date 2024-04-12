// Écrivez une fonction qui prend en paramètre un prénom. La fonction doit retourner “Un pour <prenom>, un pour moi”. 
// Si aucun prénom n'est donné, la fonction doit retourner “Un pour toi, un pour moi”.

function partage(prenom = 'toi') {
    return `Un pour ${prenom}, un pour moi`
}
  
let resultat = partage('falonne')
console.log(resultat);

console.log(partage());