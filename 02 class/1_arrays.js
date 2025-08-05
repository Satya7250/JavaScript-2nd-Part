// array

const myArr = [0, 1, 7, 3, 4, 5];
// console.log(myArr[4]);

// console.log(myArr.sort()) //sorting
// console.log(myArr.length) //length

// console.table([myArr, myArr.length, myArr[4], myArr.push(6), myArr.push(7), myArr.pop()])

// myArr.unshift(9) // add number as first element
// myArr.shift() // it shift 9

// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c", myArr);
console.log(myn2);
