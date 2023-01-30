//  in interface, you can define methods

interface User {
   readonly dbId: number, //unchangeable after first initialization
   email: string,
   userId: number,
   googleId?: string, //optional

  // methods in interface
   startTrail: () => string // this means that, this is a method that must return a string
   anotherTrail(): string // another way of declaring methods(preferable)
   getCouponName(couponname: string): number // this means that this method should take an argument of type string and return a value of type number

}
//  This is called reopening an interface
interface User { 
    githubToken: string
}
//  you can use the extend keyword with interfaces
  interface Admin extends User {
    role: 'admin' | 'ta' | 'learner';
}


const hitesh: Admin = {  
    dbId: 22, 

    email: 'h@h.com',

    userId: 2211,

    startTrail: () => {
        return 'trail started' // returns a string
    },

    anotherTrail: () => {
        return 'Another way of declaring methods'
    },

    getCouponName: (name: 'sunkanmi') => {  //you don't have to use the same variable in the argument as declared in the interface method. 
        return 10 
    },

    githubToken: 'github',

    role: 'admin',
}

hitesh.email = 'h@h.com'

export {}