let mots = [
	"arbre", 
	"soleil", 
	"lumière", 
	"pomme", 
	"ordinateur", 
	"livre", 
	"bouteille", 
	"téléphone", 
	"fenêtre", 
	"chaise", 
	"table", 
	"voiture", 
	"ciel", 
	"eau", 
	"ordinateur", 
	"souris", 
	"clavier", 
	"écran", 
	"lampe", 
	"bureau"
];

let petitsMots = [];
let grandsMots = [];

for (let i = 0; i < mots.length; i++) {
    let mot = mots[i];
    if (mot.length < 7) {
        petitsMots.push(mot);
    } else {
        grandsMots.push(mot);
    }
}

let nbPetitsMots = petitsMots.length;
let nbGrandsMots = grandsMots.length;

console.log(`Il y a ${nbPetitsMots} petits mots et ${nbGrandsMots} grands mots.`);
console.table(petitsMots);
console.table(grandsMots);
