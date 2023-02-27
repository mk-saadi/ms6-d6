// console.log(this);

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
    console.log(this);
    return this.name + " is tithi";
  },
  // >> arrow function
  gradeArrow: () =>{
    console.log(this);
  },

  gradeNested: () =>{
    const arrow = () => {
        console.log(this);
    }
    arrow();
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

student.grade()

// # another 

function clickHandler(){
    console.log("inside click handler",this);
}

document.getElementById("clickHandler2").addEventListener('click', function(){
    console.log(this);
})