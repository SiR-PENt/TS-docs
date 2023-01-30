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
const id = identityFour({ brand: 'Ace', type: 'whiskey' });
// example getSearchProducts below
// when returning a value, you have to return a value of data type T
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
//  syntax for arrow functions
const getMoreearchProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFuntion(valOne, valTwo) {
    return {
        valOne, valTwo
    };
}
anotherFuntion(3, { connection: 'hi', username: 'low', password: 'hilow' });
//creating a generic class
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
