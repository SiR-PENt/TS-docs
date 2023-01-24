"use strict";
exports.__esModule = true;
var User = {
    name: 'Olasunkanmi',
    email: 'ol@gmail.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'Olasunkanmi', isPaid: false });
function createCourse() {
    return { name: 'reactjs', price: 399 };
}
//  In TS, we can create custom types as seen above. 
// Now, we can use the above type as a data type in a function.
function createAUser(user) {
    return { name: '', email: '', isActive: true };
}
//  In the function above, User now is being used as a type. The function also returns a value of type user.
createAUser({ name: '', email: '', isActive: true });
var myUser = {
    _id: '1234',
    name: 'h',
    email: 'h@h.com',
    isActive: false
};
myUser.email = 'h@gmail.com'; // can be modified
