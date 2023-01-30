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

const id = identityFour<Bottle>({brand: 'Ace', type: 'whiskey'})

// example getSearchProducts below
// when returning a value, you have to return a value of data type T
function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3
    return products[myIndex]
}

//  syntax for arrow functions
const getMoreearchProducts = <T,>(products: T[]): T => {
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}

// using type parameters in generic contraints
interface DataBase {
    connection: string,
    username: string,
    password: string
} 

function anotherFuntion<T, U extends DataBase>(valOne: T, valTwo: U):object {
   return {
    valOne, valTwo
   }   
}

anotherFuntion(3, {connection: 'hi', username:'low', password:'hilow'})
 
interface Quiz {
  name: string,
  type: string,
}

interface Course {
    name: string,
    author: string,
    subject: string,
}

//creating a generic class
class Sellable<T> {
  public cart: T[] = [] 
  
  addToCart(product: T){
    this.cart.push(product)
  }
}
 