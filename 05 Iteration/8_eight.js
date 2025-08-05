// reduce()


const myArray = [1,2,3,4,5];
const initialValue = 0
const sumwithInitial = myArray.reduce((acc, currval) => {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
}, 0)
// console.log(sumwithInitial);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "movile dev course",
        price: 5599
    },
    {
        itemName: "app development",
        price: 8888
    },
];

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)

console.log(priceToPay);
