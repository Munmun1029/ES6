// array of object
const friends = [
    { id: 1, name: 'Farhana Yeasmin Munmun', address: 'Jigatala' ,age: 24 },
    { id: 2, name: 'Arfin Ismail ', address: 'Nababganj',age: 24 },
    { id: 1, name: 'Sumaiya shafi', address: 'dhanmondi' ,age: 25},
]
// map
const names = friends.map(friend =>friend.name)
// console.log (names)

// forEach
friends.forEach(f=>console.log(f.id))

// filter
const years = friends.filter(f=>f.age<= 24)
// console.log(years)

// find
const sumu = friends.find( f=>f.name ==='Sumaiya shafi')
// console.log (sumu)
