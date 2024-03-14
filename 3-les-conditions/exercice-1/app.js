let age = prompt("Quel est votre age ?");
age = parseInt(age);
console.log(age);

if (age >= 18) {
    console.log("Vous êtes majeur.");
} else {
    console.log("Vous êtes mineur.");
}