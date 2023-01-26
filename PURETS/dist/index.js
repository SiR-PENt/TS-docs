"use strict";
//  TypeScript classes
class User {
    constructor(email, name) {
        // Private classes
        //  To make a variable unaccessbile as a variable, you should use the private keyword
        this.city = '';
        this.email = email;
        this.name = name;
    }
}
const hitesh = new User('h@h.com', 'hitesh');
