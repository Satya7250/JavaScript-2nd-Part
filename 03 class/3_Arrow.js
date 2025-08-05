const user ={
    username: "satya",
    price: 999, 
    welcomeMessage: function (params) {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "richa"
// user.welcomeMessage()

// console.log(this);


// function funny(){
//     //we can not use here this in function
//     console.log(this);
// }
// funny()


const bunny = () => {
    let username = "satya prakash"
    console.log(this)
}

// bunny()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1+num2 //implicit return


// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})
// console.log(addTwo(3,5))

// const myArray = [2, 3, 6, 5, 9]
// myArray.forEach((key)=>{
//     console.log(key)
// })





