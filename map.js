const numbers = [4, 5, 6, 7, 9]

// manual system 
const doubled = [];

for (const num of numbers) {
    const double = num * 2;
    doubled.push(double);
}

/** map system (which is  creates a new array from calling a function for every array element. 
 *  map() does not execute the function for empty elements.)
*/

function double(num) {
    // console.log('Count ', num)
    return num * 2;
}

const result = numbers.map(double)

// another way with arrow function
const double2 = n => n * 2
const result2 = numbers.map(double2)

// inline mapping function
const result3 = numbers.map(n => n * 2)

// string mapping 
const friends= ['Farhana Yeasmin', 'Arfin Ismail', 'Sumaiya Shafi']
const lengths = friends.map(f => f.length)
const firstLetter = friends.map(friend => friend[0])


// console.log(firstLetter)
// console.log (lengths)

