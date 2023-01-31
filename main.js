// //ex1
// class Person {
//     constructor(firstName,lastName) {
//       this.firstname = firstName;
//       this.lastName = lastName;
//     };
// };

// class Student extends Person {
//     constructor(firstName,lastName, StudenId){
//         super(firstName,lastName);
//         this.StudenId = StudenId;
//     };

//     getDetails(){
//         return `${this.firstname}${this.lastName} ${this.StudenId}`  
//     }
// };
// console.log(new Student('niv','ram','3333')); 


// //ex2
// class BankAccount {
//     deposit(value){
//         return (this._balance += value)
//     }
//         get balance() {
//             return this._balance;
//     };
//     set balance(value) {
//         this._balance = value;
//       }
// };

// const account = new BankAccount();
// account.balance = 200 ; 
// account.deposit(100);
// console.log(`Balance: ${account.balance}`);



// //ex3
// class Car {
//     constructor(make, model, year) {
//       this._make = make;
//       this._model = model;
//       this._year = year;
//     }
  
//     get details() {
//       return `Make: ${this._make}, Model: ${this._model}, Year: ${this._year}`;
//     }
  
//     set details(values) {
//       [this._make, this._model, this._year] = values.split(",");
//     }
//   }
  
//   const car = new Car("Toyota", "Camry", 2020);
//   console.log(car.details);
//   car.details = "Honda, Civic, 2022";
//   console.log(car.details);

//ex4 - no good
class BankAccount {
  #balance = 0;
  #owner = '';
  #transactions = [];

  constructor(owner) {
      this.#owner = owner;
  }

  deposit(amount) {
      if (amount > 0) {
          this.#balance += amount;
          this.#transactions.push(`Deposit of ${amount}`);
      }
  }

  withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
          this.#balance -= amount;
          this.#transactions.push(`Withdrawal of ${amount}`);
      }
  }

  getBalance() {
      return this.#balance;
  }

  getTransactions() {
      return this.#transactions;
  }
}


let account = new BankAccount("niv");
account.deposit(100);
account.withdraw(50);
console.log(account.getBalance()); 
console.log(account.getTransactions());




//ex5
class Animal {
  constructor(name) {
      this.speed = 0;
      this.name = name;
  }

  run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  hide() {
      console.log(`${this.name} hides!`);
  }

  stop() {
      super.stop();
      this.hide();
  }
}


let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); 
rabbit.stop();

//ex6
class Calculator {
  add(a, b = 0) {
      return a + b;
  }
}

let calculator = new Calculator();
console.log(calculator.add(1)); 
console.log(calculator.add(1, 2)); 