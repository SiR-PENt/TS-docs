//  syntax for functions
 
//accepting params of a particular type and returning a particular type in your functions

function addTwo(num: number): number {

    // the type assigned after the function declaration above is for the data type that is expected 
    // to be returned by the function
    return num + 2
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}
//  scenario for creating a default parameter in functions
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5)
getUpper('daniel')
signUpUser('hello', 'there', true)
loginUser('h', 'h@h.com')

// syntax in arrow functions
 
const getHello = (s: string): string => {
    return ''
}

// also note that functions can take a union type. i.e we can return more than one type in a function.
// We'll get back to that later.

// map functions 

const heros = [ 'thor', 'spiderman', 'ironman']

heros.map((hero): string => {
    return `hero is ${hero}`
})
// the function above must return a string

// returning void and never

function consoleMsg(errMsg: string): void {
   console.log(errMsg)
} // here, the function doesn't return a value, hence the void type

function handleError(errMsg: string): never {
   throw new Error(errMsg)
} // here, the function doesn't return a value, hence the void type

export {} 