interface Employee {
  pay(): void;
}

class FullTimeEmployee<F> implements Employee {
  pay() {
    console.log("full time!");
  }
  workFullTime() {}
}

class PartTimeEmployee<P> implements Employee {
  pay() {
    console.log("part time!");
  }
  workPartTime() {}
}

function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee
}

const yuna = new FullTimeEmployee();
const bob = new PartTimeEmployee();
yuna.workFullTime();
bob.workPartTime();

const yunaAfterPay = pay(yuna);
const bobAfterPay = pay(bob);


const obj = {
  name :'yuna',
  age: 20,
}

const obj2 = {
  animal: '🐛'
}

function getValue<T, K extends keyof T>(obj:T, key:K) : T[K] {
  return obj[key]
}

console.log(getValue(obj, 'name'))
console.log(getValue(obj, 'age'))
console.log(getValue(obj2, 'animal'))