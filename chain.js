// data access

const data = [{ id: 1, name: 'Farhana Yeasmin Munmun', address: 'Jigatala' }]
// console.log (data[0].name);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'Farhana Yeasmin Munmun', address: 'Jigatala' },
        { id: 2, name: 'Arfin Ismail ', address: 'Nababganj' },
    ]
}

// console.log(products.data[1].name);


const user = {
    id: 1,
    name: 'Farhana Yeasmin Munmun',
    address: {

        street: {
            road: 58,
            PO: 'Jigatala',
            PS: 'Hazaribugh'
        },
     city: 'Dhaka',   
    }
}

console.log (user.address.street.PO);