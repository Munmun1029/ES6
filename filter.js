// filter() selected element based on a condition and return an array with the element that fulfilled the condition

const players = [54, 57, 59, 51, 65, 75, 68, 63, 67]
// const selected = players.filter(p => p > 60)
// const selected = players.filter(p => p > 70)
// const selected = players.filter(p => p > 80)
const selected = players.filter(p => p % 2 === 0)

console.log(selected);