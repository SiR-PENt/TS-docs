const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
   return val;
}

function identityTwo(val: any): any {
    return val;
}

//  the data type Type is almost like any, just that when the argument is passed it defaults to the data type of the argument
//  and when the it returns, it defaults to the data type of the return value
function identityThree<Type>(val: Type): Type {
 return val;
}

// a shorter way of defining this is

function identityFour<T>(val: T): T {
    return val;
}

// You can create your own data type...
interface Bottle {
    brand: string,
    type: string,
}
//when you create your custom type, the generic type should be called like this

identityFour<Bottle>({brand: 'Ace', type: 'whiskey'})