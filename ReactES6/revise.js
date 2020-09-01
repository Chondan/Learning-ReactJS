class Car {
    constructor(brand) {
        this.brand = brand;
    }
    greeting() {
        console.log("Hello, I am " + this.brand);
        return("Yes!!!");
    }
    test() {
        console.log(this);
    }
    test2 = () => {
        console.log(this);
    }
    static brand = "Aston Martin";
}
let ford = new Car("Ford");
console.log(ford.greeting(), ford.brand);
class SuperCar extends Car { 
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    greeting() {
        console.log("Hi, I am " + this.brand + " " + this.model);
    }
}
let astonMartin = new SuperCar("Aston Martin", "DB11");
astonMartin.greeting();

// What About this?
// The handling of this is also different in arrow functions compared to regular functions.
// In short, with arrow functions there are no binding of this

// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever

// With arrow functions, the this keyword always represents the object that defined the arrow function


function example1(func, func2) {
    func(); // undefine
    func2(); // class SuperCar
}

// example1(astonMartin.test, astonMartin.test2);
// window.addEventListener('load', astonMartin.test);

