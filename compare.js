// # [array], {object} 


// const first = {a: 2};
// const second = {a: 2};
// const third = second;

// if (first === second) {
//   console.log("they are the same");
// }
// else {
//   console.log("they are not the same");
// }
// >> output: they are not the same 

// if (third === second) {
//   console.log("they are the same");
// }
// else {
//   console.log("they are not the same");
// }
// >> output: they are the same 

// # not recommended 
// >> will convert both to strings 

const first = {a: 2, b: 5, c: 2, d: 9};
const second = {a: 2,c: 2, b: 5, d: 9};

const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

// console.log(firstString, secondString);

// if (firstString === secondString) {
//   console.log("they are the same");
// }
// else {
//   console.log("they are not the same");
// }

// # recommended way to compare objects

function compareObjects(first, second) {
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);

    // >> don.t forget to use ".length"- otherwise the function will return "false" 
    if(firstKeys.length === secondKeys.length){

        // >> same as the one below 
        // for(let i = 0; i < firstKeys.length; i++){
        //     if(first[firstKeys[i]]!== second[secondKeys[i]]){
        //         return false;
        //     }
        // }
        for(const key of firstKeys){
            if(first[key]!== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

const isSame = compareObjects(first, second)
console.log(isSame);