const user: (string | number)[] = [1, 'hc'] // here, we see that the key are in no particular order with respect to how to datatypes are defined
 
//  in order to make the keys in the array in the order of the datatypes defined, we use tuples. see example below

let tUser : [ string, number, boolean]

tUser = [ 'fg', 1223, true]
// above, we see that with the help of tuples, we can make it in order of how the datatypes were declared

// TUPLES CAN ALSO BE USED TO RESTRICT THE LENGTH OF AN ARRAY as seen below

let rgb: [ number, number, number ] = [255, 123, 112]
//  above, we see that rgb is declared as an array of numbers. But this array must only be length of 3 as declared, since number is declared only 3 times.

// we can also declare custom types as we have done before on tuple data types

type User = [ number, string ]

const newUser: User = [ 112, 'example@google.com']

newUser[1] = 'hc.com' // you can over-write the content of an array
newUser.push(4) // CAVEAT | antipattern: you can also use array methods to manipulate the array. Just that I have observed it must be a type of either of the already declared datatype

export {}