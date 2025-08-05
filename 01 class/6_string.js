let name = "Satya ";
let lastName = "Prakash";
let fullName = name + lastName;

let newName = name.slice(0,5);

// console.table([newName, fullName, `${name}${lastName}`]);

const gameName = new String('satya prakash')
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length); //length of string
// console.log(gameName.toUpperCase); //uppercase
// console.log(gameName.toLowerCase); //lowercase
// console.log(gameName.charAt(2)); //index position of char
// console.log(gameName.indexOf("t")); //position of "t"

const newString = gameName.substring(0,4);
// console.log(newString);

const  newStringOne = "    hitesh    ";
// console.log(newStringOne.trim());

const url = "https://satya.com/satya%20prakash";
// console.log(url.replace("%20","-"));

// console.log(url.includes("hitesh")); //false
// console.log(url.includes("satya")); //true

// console.log(gameName.split(" ")); //split based on dash
