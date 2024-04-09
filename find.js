const players = [65, 75, 54, 69, 52, 57, 68, 63, 67]
// find()  selected element based on a condition and return only first element of the array which is fulfilled the condition (it can not give all the element of the array which are also fulfilled the condition)
const selected = players.find(player => player > 60)
console.log(selected)