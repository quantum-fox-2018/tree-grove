class User {

    constructor(){

        this._firtsName = ''
        this._lastName = ''
    }

    set firstName(firstName) {

        this._firtsName = firstName
    }

    set lastName(lastName) {

        this._lastName = lastName
    }
}

let user = new User()
user.firstName = 'Doe'
// console.log(user)
console.log(user)