// singleton
// object literals

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Satya",
    "full name": "Satya prakash",
    [mySym]: "Keyone1",
    age: 19,
    location: "Jaipur",
    email: "satya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["emial"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email = "satya@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "microsoft@satya.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());