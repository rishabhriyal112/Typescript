// 1. Basic object type
let user: {
  name: string;
  age: number;
} = {
  name: "Rishabh",
  age: 25
};


// 2. Optional property
let employee: {
  name: string;
  salary?: number;
} = {
  name: "Amit"
};


// 3. Readonly property
let product: {
  readonly id: number;
  name: string;
  price: number;
} = {
  id: 101,
  name: "Laptop",
  price: 50000
};

// product.id = 102; // ❌ Error


// 4. Nested object
let student: {
  name: string;
  address: {
    city: string;
    pincode: number;
  };
} = {
  name: "Rishabh",
  address: {
    city: "Dehradun",
    pincode: 248001
  }
};


// 5. Object with an array
let userList: {
  name: string;
  skills: string[];
} = {
  name: "Rishabh",
  skills: ["React", "TypeScript", "Node.js"]
};


// 6. Object type using type alias
type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "Amit",
  age: 30
};


// 7. Object type with a method
type Account = {
  username: string;
  login(): void;
};

const account: Account = {
  username: "rishabh",
  login() {
    console.log("Logged in");
  }
};
