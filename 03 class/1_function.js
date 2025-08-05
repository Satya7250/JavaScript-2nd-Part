//function

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName()

num1=10
num2=20
function addTwoNumbers(num1, num2){
    // console.log(num1 + num2);
    return num1 + num2
}

// addTwoNumbers(num1,num2)
const result = addTwoNumbers(num1,num2)
// console.log("Result: ",result);

function loginUserMessage(username) {
    if(username===undefined)
    {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("satya prakash"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(2, 400, 500))

const user = {
    username: "satya",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "satya",
    price: 333
})


const myNewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray){
    return getArray[1]
}

// console.log(returnSecondvalue(myNewArray))
// console.log(returnSecondvalue([200, 900, 100, 500]))

