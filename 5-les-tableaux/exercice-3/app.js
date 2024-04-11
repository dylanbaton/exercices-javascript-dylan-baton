let jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

console.table(jours);

for (let i = 1; i <= 7; i++) {
    console.log(`le jour ${i}  de la semaine est ${jours[i-1]}`);
  }
  