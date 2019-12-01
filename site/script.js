var x = "Learning Var Scopes";
function a () {
    var x = 5;
    b();
}
function b () {
    console.log(x);
}
var c = function (z) {
    return z;
}
a();

var string = "Hello";
string += "World!";
console.log(string + "!");

var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
console.log(company);

// Object literal notation
var bosch = {
    name: "Bosch", 
    ceo: {
        firstName: "Volkmar",
        favColor: "blue"
    },
    "stock of company": 110
};
console.log(bosch);

//function in javascript are objects!
function multiply(x,y){
    return x*y;
}
multiply.version = "v.1.0.0";
console.log(multiply.version);

//function factory
function makeMultiplier(multiplier) {
    var myFunc = function(x) {
        return multiplier * x;
    };
    return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

// Passing by Valie vs. by Reference:
// In Javascript, primitives are passed by value, objects are passed by reference
//pass by value
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);
b = 5;
console.log("after b update:");
console.log("a: " + a);
console.log("b: " + b);
// pass by referencce
var a = {x:7};
var b = a;
console.log(a);
console.log(b);
b.x = 5;
console.log("after b update:");
console.log(a);
console.log(b);

//'this' keyword
function example(){
    console.log(this);
    this.myName = "Katha";
}
example()
console.log(window.myName);

// //function constructors
// function Circle (radius) {
//     console.log(this);
//     this.radius = radius;
//     this.getArea = 
//         function(){
//             return Math.PI * Math.pow(this.radius, 2);
//         };
// }
// var myCircle = new Circle(10);
// console.log(myCircle.getArea());

//alternative
function Circle (radius) {
    console.log(this);
    this.radius = radius;
}
Circle.prototype.getArea = 
    function(){
        return Math.PI * Math.pow(this.radius, 2);
}
var myCircle = new Circle(10);
console.log(myCircle.getArea());

function Dog(name){
    this.name = name;
}
Dog.prototype.bark = function() {
    console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();