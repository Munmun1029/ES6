/** REASON FOR UNDEFINE
 * when value not assign
 * function with no return 
 * parameter that have no argument 
 * if return has nothing 
 * property that doesn't exist
 * array element out of the index range
 * if directly delete a element from array 
 * directly can not store undefine
 * 
 * */

let first;
// console.log(first)

function second(a, b) {
    const total = a + b;
}

const result = second();
// console.log(result)


function third(a, b, c, d) {
    const total = a + b + c + d;
    // console.log(a, b, c, d);

}
// third(2, 5)


function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;

    }

    return a + b;
}
const total = noNegative(2, -5);
// console.log(total);

const forth = { id: 4, name: 'Four', age: 4 }

// console.log( forth.salary)


const fifth = [1, 2, 3, 4, 5]
// console.log(fifth[1], fifth[4], fifth[10]);

const sixth = [1, 2, 3, 4, 5, 6]
delete sixth[1];
// console.log(sixth);

const seventh = undefined;

// console.log(seventh);