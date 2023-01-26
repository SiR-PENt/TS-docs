//  TypeScript classes

class User {
    email: string
    name: string
    // Private classes
    //  To make a variable unaccessbile as a variable, you should use the private keyword
    private readonly city: string = ''
    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
}

const hitesh = new User( 'h@h.com', 'hitesh')
