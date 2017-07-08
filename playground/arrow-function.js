/**
 * this all are arrow functions
 * arrow function not bind with "this" keyword
 * it also not support "arguments" keyword
 * instead of arrow function, normal function support both of these
 */

var square = (x) => {
    var result = x * x;
    return result;
}

console.log("square:",square(9));

var cube = (x) => x * x * x;

console.log("cube:",cube(9));

var add1 = a => a + 1;
console.log("add 1:", add1(5));

var user = {
    name: "Junaid",
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHiAlt(1,2,3);
