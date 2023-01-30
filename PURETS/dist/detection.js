"use strict";
//  Narrowing
function detectTypes(val) {
    if (typeof val === 'string')
        return val.toLowerCase();
    return val + 3;
}
function isAdminAccount(account) {
    if ('isAdmin' in account)
        account.isAdmin;
    // account is of type admin or user. The in operator checks if 'isAdmin' is in either of Admin or User 
    //  so it returns the value of isA
}
isAdminAccount({ name: 'hey', email: 'lo', isAdmin: true });
// instanceof narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
    //  this function is checking if the params passed to the function has a method of swim.
    //  if it does, it returns true.
    // Basically, without the `pet is fish`, the function will return a true or false value. i.e it is not specific as to what type pet is.
    // however, `pet is fish` narrows the datatype of pet to fish
}
function getFood(pet) {
    if (isFish(pet)) {
        pet; //here, if true pet is now fish
        return ' fish food ';
    }
    else {
        pet; //here, if false pet is now bird 
        return 'bird food';
    }
}
function getTrueShape(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side;
}
// switch use cases
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side * shape.side;
        case 'rectangle':
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
