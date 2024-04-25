// Exercice 7 : Barrer les tâches
// > Créez un liste de tâches en html. 
// 1 - Selectionner tous les les éléments li et appliquez leur une couleur `darkblue`
// 2 - Rajoutez des évènements pour que lorsqu’on clic sur une tâche, celle ci se raye.

const items = document.querySelectorAll('li');

for (const item of items) {
    item.style.color = "darkblue";

    item.addEventListener('click', function() {
    item.classList.toggle('raye');
    });
}

