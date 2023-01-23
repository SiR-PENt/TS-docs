"use strict";
//  syntax for functions
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
//  scenario for creating a default parameter in functions
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper('daniel');
signUpUser('hello', 'there', true);
loginUser('h', 'h@h.com');
