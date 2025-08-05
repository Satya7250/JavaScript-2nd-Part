// for loop

//syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// for(let i = 0; i<5; i++){
//     console.log("Hello JavaScript"); 
// }

for(let j=0;j<6;j++){
    const element = j;
    if(element == 5){
        // console.log("5 is best number");      
    }
    // console.log(element);
}

for(let i = 0; i<= 3; i++){
    for(let j=1;j<=3;j++){
        // console.log(j); 
    }
}

num=2
for(let i = 1; i<=10; i++){
    // console.log(`${i} x ${num} = ${i*num}`);  
}

let myArray =["flash","batman", "superman"]
for(let i= 0; i<myArray.length; i++){
    const element = myArray[i];
    // console.log(element);
}




// break and continue

for(let i=1; i<=20; i++){
    if(i == 5){
        // console.log(`Detected 5`);
        break
    }
    // console.log(`value of i is ${i}`);
}


//continue
for(let i=1; i<=20; i++){
    if(i == 5){
        // console.log(`Detected 5`);
        continue
    }
    // console.log(`value of i is ${i}`);
}




