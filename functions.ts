//  syntax for functions

function addTwo(num: number) {
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
export {}