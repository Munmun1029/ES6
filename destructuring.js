/**
 * destructuring 
 */

// object destructuring 

// const { name, age, y, z, x } = { x: 24, y: 1, z: 7, name: 'farhana yeasmin ', age: 24 }
const { name, age, ...other } = { x: 24, y: 1, z: 7, name: 'farhana yeasmin ', age: 24 }


// array destructuring

const [first,second,...remaining]= ['farhana','yeasmin','munmun']

