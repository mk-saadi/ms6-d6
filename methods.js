// # methods

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
    console.log(this.name, "is still a student");
    return this.status + " is tithi";
  },
  // >> do not forget to use ","

  improve: function () {
    this.grade();
    return `${this.name} is learning more about ${this.weakness}`;
  },
  treatDay: function (amount, tips) {
    this.balance = this.balance - amount - tips;
    return this.balance
  },
};

// >> do not forget to call the method
// student.grade();

// >> return improve
const improve = student.improve("local culture");
// console.log(improve);

// >> return treatDay
const treatDay = student.treatDay(1980, 100);
const another = student.treatDay(1500, 0)

console.log(treatDay);
console.log(another);

// >> return function
const output = student.grade();
// console.log(output);

// console.log(student);

// # another method example
