/**
 * truthy
 1.any number except 0
 2.true
 3.any string except empty string
 4.empty object
 5.empty array

 *falsy
 1. number = 0  
 2.false
 3. empty sting
 4. undefined
 5.null value
 */

const x =false;
if(x){
    console.log('value of x id truthy.');
}
else{
    console.log('value of x is falsy.');
}

// check falsy

const y = null;

if(!y){
    console.log('Value is falsy')
}
// check truthy

const z ={class:11}

if (!!z){
    console.log('Value is truthy')
}