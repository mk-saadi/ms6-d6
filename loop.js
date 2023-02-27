// >> for of loop can not be used with object 
// # [array], {object} 

// # "for of"- array 
// # "for in" object 

/*
# 3 ways to read object properties 
>> 1. bottle.color 
>> 2. bottle['color'] 
>> 3. bottle[key] 
*/

// >> for of loop 

const numbers = [56, 985, 35, 59, 65, 70, 48, 55];
for (const number of numbers) {
  //   console.log(number);
}

const bottle = {
  // >> keys     values(string, number, boolean, object, function etc.) 
  color: "sky blue",
  size: "large",
  price: 850,
  quantity: 2,
  capacity: "1.5 liter",
  isNew: true,
};

// >> to get (keys) array from object use 

// >> first option to loop through objects 
const keys = Object.keys(bottle);
// console.log(keys);

// >> second option to loop through objects 

for (const key of keys) {
  // console.log(key, bottle[key]);
}

// >> third option to loop through objects 
// >> must know for in loop 

// # for in loop 

for (const key in bottle) {
  const value = bottle[key];
  //   console.log(key, value);
}

// # advanced option 

const pair = Object.entries(bottle);
console.log(pair);
for (const [key, value] of Object.entries(bottle)) {
  console.log(key, value);
}
