function sum(a,b,c){
    console.log(arguments[4]);
    const result = a+b+c;
    return result;
}

const total = sum ( 45,6,7,89,25,27);
console.log (total);