// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();


((name, roll= 10, age = 18) => {
    console.log(`DB CONNECTED TWO ${name} ${roll} ${age}`);
    
})("Satya Prakash", roll = 20)

