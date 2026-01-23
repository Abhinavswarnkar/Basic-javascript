// ***************for-of loop***************
// for...of loop is used to iterate over values of iterable objects like arrays, strings, maps, sets, etc
const arr=[1,2,3,4,5,6]
for (const num of arr) {
    // console.log(num);
    
}

const greetings="hello world"
for (const greets of greetings) {
    // console.log(`here is each letter of ${greets}`);
    
}

// **************Map method******************
const map= new Map()
map.set("IN",'India')
map.set("USA","United States Of America")
map.set("Fr","France")
console.log(map);
// returns a new array, with unique set of key and value.
for (const [element,value] of map) {
    console.log(`${element} :- ${value}`)
}
// we can destructure the array of map using [] if we need. 

// we cannot use for-of loop for objects .
// we can use Object.keys to use for of. 