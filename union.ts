let score: number | string = 33

score = 33
score = '55'  // we see how that score can be a number or a string

type User = {
    name: string;
    id: number;   
}

type Admin = {
    username: string;
    id: number;
}

let hitesh: User | Admin = { name: 'hitesh', id: 334 }

hitesh = { username: 'hc', id: 334 }


function getDbId( id: number | string ){
    // id.toLowerCase() 
    //  note that methods like the above method can't be used when using union types. 
    // This is because the data type declared for the variable is not specifically of type number nor type string. 
    // It is either both, so you have to use methods that are common to strings and numbers. Or wrap it in a condition as seen below.

    if(typeof id === 'string'){
        id.toLowerCase()
    }
    console.log(`Id is ${id}`)
}

getDbId('3')
getDbId(3)

// ARRAYS

//  when using union types in arrays, the keys in the array can either be of one type or the other.
//  that is they can't be of the two types together. See example below.

const data: string[] | number[] = [1, 2, 3]

// to make them contain both types, we use another syntax

const data2: ( string | number)[] = ['1', 2, '3']

//  SETTING UNION TYPES TO VARIABLES

let seatAllotment : 'aisle' | 'middle' | 'window'
//  above, we let typescript know that the variable seat allotment can strictly either be aisle, middle, and window
seatAllotment = 'aisle'
// seatAllotment = 'crew' // can't be