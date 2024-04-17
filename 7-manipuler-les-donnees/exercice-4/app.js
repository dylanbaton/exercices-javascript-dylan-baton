// Exercice 4 : Palindrome
// > Écrivez une fonction qui détermine si une chaîne de caractères donnée est un palindrome. Un palindrome est un mot ou une phrase qui peut se lire de la même manière de gauche à droite ou de droite à gauche, en conservant le même sens. La fonction doit retourner un booléen : `true` si la chaîne est un palindrome, `false` sinon.
// Exemples de palindromes : `“kayak”`, `“radar”`, `“été”`, `“ressasser”`.

function isPalindrome(palindrome) {  

    // longeur du mot
    const len = str.length;  
  
    // parcourir les lettres du mot 
    for (let i = 0; i < len / 2; i++) {  
        
        // vérifier que le premier et le dernier caractères sont identiques 
        if (str[i] !== str[len - 1 - i]) {  
            alert( 'Non palindrome.');  
        }  
    }  
    alert( 'Palindrome');  
}  