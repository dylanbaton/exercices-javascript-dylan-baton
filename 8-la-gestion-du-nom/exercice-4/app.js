// Exercice 4 : Fonction qui créé un élément html
// Créez un fonction `createTag(tagName, content)`, qui prend en paramètre un nom de balise, et un contenu. Cette retourne un élément html.
// Testez votre fonction pour créer des éléments et les ajouter au DOM.

function createTag(tagName, content) {
    let elementHTML = document.createElement('tagName');
    elementHTML.innerText = content;
    return elementHTML;    
}

const paragraphe = createTag('p', 'Bonjour')

document.body.appendChild(paragraphe)