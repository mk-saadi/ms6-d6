// # borrow 

const student = {
  name: "tithi",
  age: 20,
  status: "student",
  weakness: "local culture",
  balance: 6800,
  grade: function () {
    // uniName = "dhaka university",
    // location = "dhaka",
    // subject = ["english", "foreign history"],
    // console.log(this.name, "is still a student");
    return this.name + " is tithi";
  },
  // >> do not forget to use ","

  improve: function () {
    this.grade();
    return `${this.name} is learning more about ${this.weakness}`;
  },
  treatDay: function (amount, tips) {
    this.balance = this.balance - amount - tips;
    return this.balance;
  },
};

const output = student.grade();
// console.log(output);

const mana = {
    name: "emily",
    output: "250 unit/min",
    reserve: "6870 unit",
    intake: "130 unit/min",
    balance: 9500
}
// >> call 
const output2 = student.grade.call(mana)
// console.log(output2);

// >> call 
const allMoney = student.treatDay.call(mana, 1500, 60)
console.log(allMoney);

// >> apply 
// >> put the parameters in array format "(mana, [2300, 20])" 
const output3 = student.treatDay.apply(mana, [2300, 20])
console.log(output3);

// >> bind 

const manaEva = student.treatDay.bind(mana)

// >> this 
console.log(manaEva(1500, 60));
// >> and this are the same 
const remaining = manaEva(2000, 120)
console.log(remaining);