// Exercice 3 : Changer la Couleur de Fond au clic
// > Créez un bouton qui, lorsqu'il est cliqué, change la couleur de fond de la page (du `<body>`).
// Centrez le bouton au milieu de la page (horizontalement et verticalement).

document.addEventListener('DOMContentLoaded', function() {
    const Button = document.getElementById('colorButton');

    // Fonction pour changer la couleur de fond
    function changeBackgroundColor() {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    }

    // Fonction pour générer une couleur aléatoire
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Ajouter un gestionnaire d'événements au bouton
    Button.addEventListener('click', changeBackgroundColor);
});
