// 1. Basic generic function
function identity<T>(value: T): T {
  return value;
}

const name = identity<string>("Rishabh");
const age = identity<number>(25);


// 2. Generic function with type inference
function getFirst<T>(items: T[]): T {
  return items[0]!;
}

const firstNumber = getFirst([10, 20, 30]);        // number
const firstName = getFirst(["A", "B", "C"]);       // string


// 3. Generic interface
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = {
  value: 100
};

const stringBox: Box<string> = {
  value: "Hello"
};


// 4. Generic class
class Storage<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }
}

const numberStorage = new Storage<number>(100);
const stringStorage = new Storage<string>("Hello");


// 5. Generic constraint
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

getLength("Hello");     // ✅
getLength([1, 2, 3]);   // ✅
// getLength(100);      // ❌ number has no length


// 6. Generic with multiple types
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair("Rishabh", 25);


// 7. Your example: Generic function with two different types
function userDetails<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

const user1 = userDetails("Rishabh", 25);
// A = string
// B = number
// Type: [string, number]

const user2 = userDetails("Rishabh", {
  address: "Rishikesh"
});
// A = string
// B = { address: string }
// Type: [string, { address: string }]

console.log(user1);
console.log(user2);


//Real world Example for API Response
interface ApiPromise<T>{
    status : number,
    data : T
}

const res : ApiPromise<{details : string}> = {
    status : 200,
    data : {details : "API Response Successful"}
}
