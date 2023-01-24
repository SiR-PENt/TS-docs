const superHeros: [] = [] //here, we declare that it's a data type of array, but the keys in the array are still of type never
const heroPower: number[] = [] // we have declared the array keys to be of type number
// const heroPower: Array<number> = [] // this is another way of declaring types in arrays

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = [] //this indicates that key passed into the array should be an object that satisfies the key value pairs of tpye User declared above
//example 
allUsers.push({ name: '', isActive: true })

// ARRAY OF TYPE ARRAY OF TYPE NUMBER(let's put it that way)

const MLModels: number[][] = [
    [233, 567, 345],
    [456, 67]
]
export {}