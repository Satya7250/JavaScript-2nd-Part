const user = {
    username: 'Satya',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log('Got user details from database');
        // console.log(`username: ${this.username}`);
        console.log(this);
    }

}
// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);




function User(username, logincount, isLoggedIn){
    this.username = username
    this.logincount = logincount
    this.isLoggedIn = isLoggedIn
    
    this.funny = () => {
        console.log(`Welcome ${this.username}`);
    }
    return this
} 
const userOne = new User("hitesh", 12, true)
const userTwo = new User("Satya", 2, false)
console.log(userOne.constructor);
// console.log(userTwo);

