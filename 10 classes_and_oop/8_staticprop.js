class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return`123`
    }
}

const satya = new user("Satya")
// console.log(satya.createId())

class Teacher extends user {
    constructor(username, emial){
        super(username)
        this.email = emial
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
