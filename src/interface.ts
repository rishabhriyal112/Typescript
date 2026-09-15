interface Userr {
    name : string,
    age? : number //This ? means that age is optional you can assign it or not its your choice
}

const user1 : Userr = {
    name : "Rishabh",
}

const user2 : Userr ={
    name : "Rahul",
    age : 25
}
//User1
console.log(user1.name)

//User2
console.log(user2.name)
console.log(user2.age)


// 1. Basic interface
interface User {
  name: string;
  age: number;
}
const user: User = {
  name: "Rishabh",
  age: 25
};


// 2. Optional property
interface Employee {
  name: string;
  salary?: number;
}
const employee: Employee = {
  name: "Amit"
};


// 3. Readonly property
interface Product {
  readonly id: number;
  name: string;
  price: number;
}
const product: Product = {
  id: 101,
  name: "Laptop",
  price: 50000
}; // product.id = 102; // ❌ Cannot change readonly property


// 4. Method inside interface
interface Person {
  name: string;
  greet(): void;
}
const person: Person = {
  name: "Rishabh",
  greet() {
    console.log("Hello");
  }
};



// 5. Interface extending another interface
interface BasicUser {
  name: string;
  email: string;
}
interface Admin extends BasicUser {
  permissions: string[];
}
const admin: Admin = {
  name: "Amit",
  email: "amit@gmail.com",
  permissions: ["add", "delete"]
};



// 6. Interface for function
interface Calculator {
  (a: number, b: number): number;
}
const add: Calculator = (a, b) => {
  return a + b;
};



// 7. Declaration merging
interface Student {
  name: string;
}
interface Student {
  age: number;
}
const student: Student = {
  name: "Rishabh",
  age: 25
};
