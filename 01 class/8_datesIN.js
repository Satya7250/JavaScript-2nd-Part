//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 6, 28)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2025, 6, 28, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2025-01-14");
// console.log(myCreatedDate.toLocaleString());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getHours());
newDate.toLocaleString("default",{
    weekday: "long",
});

