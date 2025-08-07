let myName = "Satya     "
let mytea = "chai     "

// console.log(myName.truelength);


let myHeros = ['thore', 'spiderman', 'hulk']

let heroPower = {
    thore: "hammer", 
    spiderman: "sling", 
    hulk: "anger",
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.satya = function(){
    console.log(`satya is present in all object`);
}

Array.prototype.heysatya = function(){
    console.log(`satya says hellow`);
    
}


// heroPower.satya()
// myHeros.satya()
// myHeros.heysatya()


// inheritance

const user = {
    name: "chai",
    emai: "chai@google.com"
}

const Teacher = {
    makeVideo: true,
}
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: `JS assignment`,
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "chaiAurCode       "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUserName.trueLength()

"Satya prakash     ".trueLength()