// var c = 300 // global scope
let a = 300
if(true){
    //block scope
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "satya"

    function two() {
        const website = "youtube";
        // console.log(username);
    }
    // console.log(website);

    two()
    
}
one()


if(true){
    const username = "ramesh"
    if(username==="ramesh"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website)
}

// console.log(username);


//************************** interesting ****************


console.log(addone(5))

function addone(value){
    return value+1
}


const addTwo = function(value){
    return value + 2
}

addTwo(5)