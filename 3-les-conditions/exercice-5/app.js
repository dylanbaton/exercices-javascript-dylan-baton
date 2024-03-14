const note = parseInt(prompt('Votre note'));

if (note >= 20){
    console.log(`extraordinaire`);
} else if (note >= 18){
    console.log(`Excellent`);
} else if (note >= 16){
    console.log(`Très bien`);
} else if (note >= 14){
    console.log(`Bien`);
} else if (note >= 12){
    console.log(`Passable`);
}else {
    console.log(Pas de mention)
}