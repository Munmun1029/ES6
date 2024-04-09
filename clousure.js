function stopWatch(){
   let counter = 0;
   return function(){
    counter++;
    return counter;
   }
}
const count = stopWatch()
console.log(count())