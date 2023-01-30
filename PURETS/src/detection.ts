//  Narrowing

function detectTypes ( val:number| string ) {
  if( typeof val === 'string' ) return val.toLowerCase()
  return val + 3
}

//  the make the above we didn't handle situations for falsey values such as when strings are empty,
// to make the function more strict, we should handle cases like this

// in operator narrowing
//  the in operator helps you in narrowing such as conditional statements

interface User {
    name: string,
    email: string,
}

interface Admin {
   name: string,
   email: string,
   isAdmin: boolean,
}

function isAdminAccount(account: Admin | User) {
 if('isAdmin' in account) account.isAdmin 
 // account is of type admin or user. The in operator checks if 'isAdmin' is in either of Admin or User 
 //  so it returns the value of isA
}  

isAdminAccount({ name: 'hey', email: 'lo', isAdmin:true })
// instanceof narrowing

function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());
    }
  }

type Fish = { swim:() => void }
type Bird = { fly:() => void }

function isFish( pet: Fish | Bird ): pet is Fish {
  return (pet as Fish).swim !== undefined 
//  this function is checking if the params passed to the function has a method of swim.
//  if it does, it returns true.
// Basically, without the `pet is fish`, the function will return a true or false value. i.e it is not specific as to what type pet is.
// however, `pet is fish` narrows the datatype of pet to fish
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet //here, if true pet is now fish
        return ' fish food ' 
    }
    else {
        pet //here, if false pet is now bird 
        return 'bird food'
    }
}

// DISCRIMINATED UNIONS

interface Circle {
    kind: 'circle',
    radius: number,
}

interface Square {
    kind: 'square',
    side: number,
}

interface Rectangle {
    kind: 'rectangle',
    length: number
    width: number
}

type Shape = Circle | Square 

function getTrueShape(shape: Shape){
 if( shape.kind === 'circle'){
    return Math.PI * shape.radius ** 2
 }
 return shape.side * shape.side
}

// Exhaustiveness Checking

type MoreShapes = Circle | Square | Rectangle
// switch use cases

function getArea(shape: MoreShapes) {

    switch(shape.kind) {
        
        case 'circle':
        return Math.PI * shape.radius ** 2
        
        case 'square':
            return shape.side * shape.side
        
        case 'rectangle':
            return shape.length * shape.width
        
        default:
            const _defaultforshape: never = shape 
            return _defaultforshape
        } 
    }    