for (var i= 0; i<5 ; i++){
    console.log(i);
}
// can get output from any where when the function is called
function print5(){
    console.log('Inside print5',5);
}
// can not define 
var print10 = function(){
    console.log('inside print10 ', 10)
}