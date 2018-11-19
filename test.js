/* Crée une variable qui contient un array d'integer et retourner la valeur max*/
const my_array = [1,2,3,4];
//affiche le contenu de my_array
console.log(my_array);
// affiche la valeur de my_array[position 1]
console.log(my_array[1]);
// return la valeur max dans un array
console.log(Math.max(...my_array));

/*affiche tout les éléments du tableau : */
for (var i = 0; i < my_array.length; i++) {

    console.log(my_array[i]);

}
/*Écris une fonction vowel_count() qui prend un string et qui retourne le nombre de voyelles*/
var vowelCount = function(str){ 
    var count = 0; 
    for(var i = 0; i < str.length; i++){ 
    if(str[i].toLowerCase() == 'a' || str[i].toLowerCase() == 'i' || str[i].toLowerCase() == 'o' ||str[i].toLowerCase() == 'e' ||str[i].toLowerCase() == 'u'){ 
     count+=1; 
    } 
    } 
return count; 
} 
console.log('combien de voyelle dans patataa ?')
console.log(vowelCount('patataa')); 
/*Écris une fonction reverse() qui prend un string et qui renvoie les caractères en position inverse. 
Ainsi, Bonjour monde ! devient ! ednom ruojnoB */
function reverse(str){
    var i = str.length -1;
    var reversed = "";
    while(i >= 0){
        reversed = reversed + str[i];
        i--;
    }
    return reversed;
}
console.log(reverse('abcd'));