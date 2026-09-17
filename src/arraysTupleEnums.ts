const array : number[] = [1,2,4,5]
const array2 : string[] = ['hello','hi','hola']
const array3 : {name : string, age : number}[] = [{name : "Rishabh",age:21},{name:"rahul",age:22}]

// Array of strings
let names: string[] = ["Rishabh", "Amit", "Rahul"];

// Array of numbers
let marks: number[] = [80, 90, 75];

// Array of booleans
let isActive: boolean[] = [true, false, true];

// Another syntax
let cities: Array<string> = ["Delhi", "Dehradun", "Mumbai"];

// Array with multiple types
let data: (string | number)[] = ["Rishabh", 25, "Amit", 30];

// Array of objects
let users: { name: string; age: number }[] = [
  { name: "Rishabh", age: 25 },
  { name: "Amit", age: 30 }
];

// Read only Arrays - You can read the values, but you cannot modify the array.
let numbers: readonly number[] = [10, 20, 30];
console.log(numbers[0]); // ✅
// numbers.push(40);   // ❌ Error
// numbers[0] = 100;   // ❌ Error
// numbers.pop();      // ❌ Error

//Another Syntax of Readonly arrays 
let names2: ReadonlyArray<string> = ["Rishabh", "Amit", "Rahul"];
// names.push("Neha"); // ❌ 



//TUPLES - A Tuple is an array where you specify the type and position of each element.Fixed length array where each position an have a specific type.

// 1. Basic tuple
let user: [string, number] = ["Rishabh", 25];

// 2. Tuple with multiple types
let person: [string, number, boolean] = ["Rishabh", 25, true];

// 3. Optional tuple element
let employee: [string, number?] = ["Amit"];
let employee2: [string, number?] = ["Amit", 50000];

// 4. Named tuple
let student: [name: string, age: number] = ["Rishabh", 25];

// 5. Readonly tuple
let product: readonly [string, number] = ["Laptop", 50000];

// product[0] = "Phone"; // ❌ Cannot modify readonly tuple

// 6. Tuple in function
function getUser(): [string, number] {
  return ["Rishabh", 25];
}

const [name, age] = getUser();

console.log(name);
console.log(age);

//Enums - TS Feature used to define a set of named constraints.
// Enums in TypeScript

// 1. Numeric enum
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;

console.log(move); // 0


// 2. Numeric enum with custom values
enum Status {
  Loading = 1,
  Success = 2,
  Error = 3
}

let currentStatus: Status = Status.Success;

console.log(currentStatus); // 2


// 3. String enum
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Editor = "EDITOR"
}

let role: Role = Role.Admin;

console.log(role); // "ADMIN"


// 4. Enum in a function
enum OrderStatus {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED"
}

function showStatus(status: OrderStatus): void {
  console.log(status);
}

showStatus(OrderStatus.Pending);


// 5. Access enum values
console.log(Role.Admin);
console.log(Role.User);
console.log(Role.Editor);
