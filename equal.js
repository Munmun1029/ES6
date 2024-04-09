// equal comparison check only primitive data . they does not check equality of non-primitive values
const first = 1;
const second = true;
// double equal check values are same or not . type coercion
if (first == second){
    console.log('values are equal')

}

else{
    console.log('Values are not equal')
}

// triple equal check the type of data and values
const f = 2;
const s = 2;
if (f === s){
    console.log('values are equal')

}

else{
    console.log('Values are not equal')
}


// how to check non-primitive values
// give not equal.
const x = [4,5,6,7]
const y= [4,5,6,7]

if (x===y){
    console.log('Equal')

}
else{
    console.log('Not Equal')
}

// give equal.
const m = [4,5,6,7];
const n= m;

if (m===n){
    console.log('Equal')

}
else{
    console.log('Not Equal')
}

