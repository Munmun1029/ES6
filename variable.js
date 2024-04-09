/**
 * var let const (block of scope)
 * template string
 */

const a = 56;
const numbers = [56, 76, 98]
const person={
    name: 'Farhana Yeasmin Munmun'
}

const message =`Hi, ${person.name} has a :${a} access to ${numbers[2]}`
console.log (message);