// # object literals
// >> [array], {object}

const bottle = {
// >> keys     values(string, number, boolean, object, function etc.)
      color: "sky blue",
      size: "large",
      price: 850,
      quantity: 2,
      capacity: "1.5 liter",
      isNew: true,
}

// >> to get the keys from the object

// console.log(Object.keys(bottle));
// >>or
// const keys = Object.keys(bottle)
// console.log(keys);

// >> to get the values from the object

// console.log(Object.values(bottle));
// >>or
// const values = Object.values(bottle)
// console.log(values);

// >> to get the entries from the object
// >> the output will be 2 dimensional array "[[...]]"

// console.log(Object.entries(bottle));
// >>or
// const entries = Object.entries(bottle)
// console.log(entries);

// >> to freeze the object
// >> using "freeze" wont allow to add nor remove or modify anything from the object

Object.freeze(bottle);

// >> to seal the object
// >> using "seal" method will prevent any keys/values from being deleted
// >> using "seal" method will prevent any new keys/values from being added, however previous existing items can be modified

Object.seal(bottle);
bottle.price = 1000

console.log(bottle);

// >> delete a key from object

delete bottle.isNew;
console.log(bottle);