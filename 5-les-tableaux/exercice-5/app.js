let jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

for (const jour of jours) {
    if (jour === "Dimanche") {
        console.log(`${jour}, des patates aussi !`);
    } else {
        console.log(`${jour}, des patates`);
    }
}
