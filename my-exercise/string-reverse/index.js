// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var str_array = [];
    debugger;
    return str.split('').reduce((prev, current, index, array) => {
        return current + prev;
    }, "");

}

reverse("blood");

module.exports = reverse;
/*
1)  
function reverse(str){
		  return str.split('').reverse().join('');
}

2)

function reverse(str) {

    var rev = "";
    for (const key of str) {
        //Key keeps coming in front to replace the ealier key. forcing a reverse 
        rev = key + rev;
    }
    return rev;
}

*/

