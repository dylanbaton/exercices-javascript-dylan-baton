let a = 1;
let b = 5;

// Résultat attendu :

// a => 5 et  b => 1

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log('a is now:', a);
console.log('b is now:', b);