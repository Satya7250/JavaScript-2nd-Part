// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "sunny";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj3 = {
    5: "d",
    6: "3"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// const obj4 = Object.assign({}, obj1, obj2, obj3) //also give an empty object {}

const obj4 = {...obj1, ...obj2}
// console.log(obj4);


const users = [
    {
        id: 1, 
        email: "sat@gmail.com"
    },
    {
        id: 2, 
        email: "mona@gmail.com"
    },
    {
        id: 3, 
        email: "ritika@gmail.com"
    },
    
]

users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
