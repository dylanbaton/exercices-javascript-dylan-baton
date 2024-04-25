// Exercice 8 : Créer un Compteur
// > Créez un bouton sur votre page web. Chaque fois que ce bouton est cliqué, un compteur s'incrémente de 1. 
// Affichez la valeur du compteur directement sur la page sous la forme "Compteur : x", où x est la valeur actuelle du compteur.

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    button.textContent = `Click count: ${event.detail}`;
  });