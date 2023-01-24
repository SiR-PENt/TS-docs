const User = {
    name: 'Olasunkanmi',
    email: 'ol@gmail.com',
    isActive: true,
}

function createUser({name: string, isPaid: boolean}) {}

createUser({name: 'Olasunkanmi', isPaid: false })

function createCourse():{name: string, price: number}{
    return { name: 'reactjs', price: 399 }
}

// TYPE ALIASES

type User = {
    name: string;
    email: string;
    isActive: boolean
}

//  In TS, we can create custom types as seen above. 
// Now, we can use the above type as a data type in a function.

function createAUser( user: User): User{
    return { name: '', email: '', isActive: true}
}
//  In the function above, User now is being used as a type. The function also returns a value of type user.
createAUser({ name: '', email:'', isActive: true})

//  READONLY and ? 

type NewUser = {
   readonly _id: string; //indicates that key _id cannot be changed
   name: string;
   email: string;
   isActive: boolean;
   credCardNumber?: number; //indicates that key is optional. i.e it could be provided or not.
}

let myUser: NewUser = {
    _id: '1234',
    name: 'h',
    email: 'h@h.com',
    isActive: false,
}

myUser.email = 'h@gmail.com' // can be modified
// myUser._id = 'asa' //this cannot be modified

// COMBINING TYPES

type CardNumber = {
    cardnumber: string
}

type CardDate = {
    cardDate: string
}

type CardDetails = CardNumber & CardDate & {
    cvv: number
} // here, we have combined two types into one type using the ampersand

export {}