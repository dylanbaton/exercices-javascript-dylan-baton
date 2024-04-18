// Exercice 2 : Ajouter un élément au DOM
// Dans la <div> avec la classe container, en javascript, ajoutez un paragraphe contenant du lorem ispum
// <body>
//     <div class="container">
//         // ...
//     </div>
// </body>

let paragraphe = document.createElement('p');
paragraphe.innerText = "lorem ispum";

const container = document.querySelector('.container');
container.appendChild(paragraphe);
