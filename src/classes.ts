// 1. Basic class
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, ${this.name}`);
  }
}

const user = new User("Rishabh", 25);
user.greet();


// 2. Access modifiers
class Employee {
  public name: string;
  private salary: number;
  protected department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  getSalary(): number {
    return this.salary;
  }
}

const employee = new Employee("Amit", 50000, "IT");

console.log(employee.name);       // ✅ public
console.log(employee.getSalary()); // ✅

// employee.salary;     // ❌ private
// employee.department; // ❌ protected outside class


// 3. readonly property
class Product {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const product = new Product(101, "Laptop");

// product.id = 102; // ❌ readonly cannot be changed


// 4. Inheritance
class Admin extends User {
  permissions: string[];

  constructor(name: string, age: number, permissions: string[]) {
    super(name, age);
    this.permissions = permissions;
  }

  showPermissions(): void {
    console.log(this.permissions);
  }
}

const admin = new Admin("Amit", 30, ["add", "delete"]);
admin.greet();
admin.showPermissions();
