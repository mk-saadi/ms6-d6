// # summary

// # ways you can create an {object}
/*
 # 1. object literal syntax 
 >> !important 
 
    const person = {
        name: 'John',
        age: 20,
        address: "NYC"
    }

 # 2. object constructor 
    const person = new Person(){
        >> adding the properties of "person" object 
        person.name = "John";
        person.age = 20;
        person.address = "NYC";
    }

 # 3. constructor function 
    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    const person1 = new Person('John', 'Doe');
    const person2 = new Person('Emily', 'Doe');

 # 4. Es6 classes 
  >> !important 

    class Person{
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    const person1 = new Person('John', 'Doe');
    const person2 = new Person('Emily', 'Doe');

 # 5. object.create() 
    const person = {
        name: "John Doe"
    }
    const person2 = Object.create(person);
    person2.name = "Emily Doe";
    console.log(person2);
 */

// # ways to spread operator
/*
 # 1.shallow copy (...)
    const data = {name: "Aileen", age: 19}
    const dataCopy = {...data}

 # 2. in code (don't use)
    const data = {name: "Aileen", age: 19}
    const dataCopy = data

 # 3. use JSON parsing (deep copy)
    const data = {name: "Aileen", age: 19}
    const dataCopy = JSON.parse(JSON.stringify(data))

    data.age = 23

    console.log(data);
    console.log(dataCopy);
 */

// # object method property view
/*
 # 1. object method property view
    const person = {
        name: 'Tania',
        DOB: 2006,
        age: function(){
            return 2023 - this.DOB
        }
    }
    console.log("Hello, I am " + person.name + " and I am " + person.age() + " years old");
*/

// # JavaScript {object} immutability 
/*
>>            freeze              seal 
    .....................................
    read       yes                 yes
    create     no                  no
    update     no                  yes
    delete     no                  no
*/

// # compare method 
// >> view compare.js file 

// # call(), apply() and bind() 
/*
>>            call()          |   apply()          |    bind() 
...............................................................................
execution     at the time     |   at the time      |    at the time when
              of binding      |   of binding       |    we execute the return
                              |                    |    function
                              |                    |
parameter     any number of   |   array[]          |    array[] and any number
              arguments one   |                    |    of arguments
              by one          |                    |
*/


// >> view borrow.js file 

// >> etc. etc. etc. 

const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);

const obj1= {module: 35, video:2}; 
const obj2= {module: 35, video:2};
console.log(obj1 === obj2);

const getGirlFriend= (name = "chokina")=>"name"; 
console.log(getGirlFriend()); 
