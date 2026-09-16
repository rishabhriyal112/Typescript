// 1. Basic function
function add(a: number, b: number): number {
  return a + b;
}


// 2. Function with no return value
function greet(name: string): void {
  console.log(`Hello ${name}`);
}


// 3. Optional parameter
function greetUser(name: string, age?: number): void {
  console.log(name, age);
}


// 4. Default parameter
function greetCountry(name: string, country: string = "India"): void {
  console.log(name, country);
}


// 5. Function expression
const multiply = function (a: number, b: number): number {
  return a * b;
};


// 6. Arrow function
const subtract = (a: number, b: number): number => {
  return a - b;
};


// 7. Function with inferred return type
const divide = (a: number, b: number) => {
  return a / b;
};


// 8. Function type
let calculate: (a: number, b: number) => number;

calculate = (x, y) => x + y;


// 9. Function with union type
function printId(id: string | number): void {
  console.log(id);
}


// 10. Function with object parameter
function printUser(user: {
  name: string;
  age: number;
}): void {
  console.log(user.name, user.age);
}


// Examples
console.log(add(10, 20));
greet("Rishabh");
greetUser("Rishabh");
greetCountry("Rishabh");
console.log(multiply(5, 4));
console.log(subtract(10, 5));
console.log(divide(10, 2));
console.log(calculate(10, 20));
printId(101);
printId("ABC101");
printUser({ name: "Rishabh", age: 25 });
