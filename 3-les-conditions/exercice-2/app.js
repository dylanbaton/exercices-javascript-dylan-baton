let number1 = prompt(`Donnez moi un premier nombre.`);
number1 = parseInt(number1);

let number2 = prompt(`donnez un deuxieme nombre.`);
number2 = parseInt(number2);

if (number1 > number2) {
    console.log(`Le nombre number1 est plus grand que le nombre number2`);
} else if (number1 < number2) {
    console.log(`Le nombre number1 est plus petit que le nombre number2`);
} else {
    console.log(`Les deux nombres sont égaux`);
}
