"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//  the data type Type is almost like any, just that when the argument is passed it defaults to the data type of the argument
//  and when the it returns, it defaults to the data type of the return value
function identityThree(val) {
    return val;
}
// a shorter way of defining this is
function identityFour(val) {
    return val;
}
//when you create your custom type, the generic type should be called like this
identityFour({ brand: 'Ace', type: 'whiskey' });
