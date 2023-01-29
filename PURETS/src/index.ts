//  TypeScript classes and access modifiers(private, public, protected)

// class User {
//     // In TS, every parameter that you dont set to private defaults to public
//     email: string
//     name: string

//     // Private classes
//     //  To make a variable unaccessbile as a variable, i.e you don't want to get it, you should use the private keyword
//     private readonly city: string = 'Jaipur'
//     // private can also be written like this #city: string = 'Jaipur'
//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//         this.city
//     }
// }

//  You can also declare the variables inside the parenthesis without declaring them outside

class User {
    // In TS, every parameter that you dont set to private defaults to public
    // Private classes
    //  To make a variable unaccessbile as a variable, i.e you don't want to get it, you should use the private keyword
    private readonly city: string = 'Jaipur'
    // private can also be written like this #city: string = 'Jaipur'
    
    // Setting Getters and Setters for private variables
    // scenarios where you want private variables to be accessible via setters and getters
    
    protected _courseCount = 1 //whenever a keyword uses protected, it can be used within its current class where it is defined and subclasses
    
    constructor(
        public email: string, 
        public name: string) {
        this.email = email
        this.name = name
        this.city
    }
    // there can also be private methods

    private deleteToken() {
        console.log('Token deleted')
    }

    // Getters and Setters
    get getAppleEmail(): string {
        return `apple${this.email}`
    }    
    // Setting getters and setters for _courseCount
    get courseCount(): number {
      return this._courseCount  
    }
    set courseCount(courseNum) {
       if(courseNum <= 1)
       {
       throw new Error('Course Count should be more than 1')
       }
       this._courseCount = courseNum;
    }
    // Note that nothing should be the return type in a setter function

}

 class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
 }
const hitesh = new User( 'h@h.com', 'hitesh')
