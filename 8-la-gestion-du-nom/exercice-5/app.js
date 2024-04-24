// Rendre floue une image
// > Affichez une image sur votre page. Ajoutez un évènement pour qu’au survol de cette image, elle devienne floue.
// (faite le bien en javascript, pas avec un `:hover`)


const image = document.querySelector(".monImage");

image.addEventListener('mouseover', function() {
    image.style.filter = "blur(10px)";
});

image.addEventListener('mouseout', function() {
    image.style.filter = "none";
});