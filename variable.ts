let greetings: string = 'Hello Olasunkanmi'

console.log(greetings)

// number
let userId: number = 334455.3 // note that  JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or 
// float - everything is simply number

// boolean
let isLoggenIn: boolean = false

// Disclaimer: You don't always have to declare types in TypeScript, as seen above. TS automatically detect the type of a variable after its first assignment to a value.  
// for example, if a variable is assigned to a number value, TS automatically knows the value is of type number, and restricts subsequent methods used on it to methods used on numbers only. 

//  type `any`

//  when a variable is declared without a type in TS, it's type defaults to any. i.e any type can be assigned to the variable. 
// However, this is bad practice as it is just as though you are writing javaScript all ocer again.


export {} //coming back to this later