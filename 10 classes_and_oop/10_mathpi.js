const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter);


// console.log(Math.PI);
// Math.PI = 5 //we can not change PI value
// console.log(Math.PI);

const chai = {
    name: "ginger chai",
    price: 250,
    isAvalible: true,

    orderChai: function(){
        console.log("code fat gaya");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
