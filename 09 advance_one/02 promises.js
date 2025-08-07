const promisesOne = new Promise((resolve, reject) => {
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    },1000)
})


promisesOne.then(() => {
    console.log('Promise consumed');
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2');
        resolve()
    },1000)
}).then(() => {
    console.log('Async 2 resolved');

})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: 'Satya prakash', email: 'chai@example.com'})
    },1000)
})

promiseThree.then((user) => {
    console.log(user);
    
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "Satya prakash", password: "1234"})
        }
        else{
            reject("Error: something went wrong")
        }

    }, 2000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The Promise is either resolve or rejected");
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "JavaScript", password: "123"})
        }
        else{
            reject("Error: JS went wrong")
        }
    },2000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('E: ',error);
//     }
// }

// getAllUser()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=> {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
})