const marvel_heros=['thor','ironman','spiderman'];
const dc_heros=['superman','flash','batman'];

//marvel_heros.push(dc_heros);
// console.log(marvel_heros);
//whole dc_heros array is pushed into marvel_heros array as one element, which is not a good practice.
//thats why we dont perfer to push one array into another .
//any new array is not formed in the case of push method.

const all_Heros=marvel_heros.concat(dc_heros);
// console.log(all_Heros);
//concats creates a new array and pushes all the elements of both the array into a new one .
// It is nore effective then push.

//*************spread method**********
const newAllHeros=[...marvel_heros,...dc_heros];
// console.log(newAllHeros);
//Best snd most widely used method to join two arrays.
//creates a new array and pushes the elemets of both the array to it.

const anotherArray=[1,2,3,[4,5],6,[7,8,[9,6,7]]];
const realAnotherArray=anotherArray.flat(Infinity);
// console.log(realAnotherArray);

//When there are nested arrays into each other , flat method is used to open all the depths
//in the array and all the elements are stored in a new array .
//we need to give the no of depths the flat could solve . we can give infinty for all the depths .


console.log(Array.isArray('Hitesh'));//checks if the given parameter is array or not.
console.log(Array.from('Hitesh'));//converts the given parameter to Array.Break down them , only iterable objects like strings.
//Does not convert objects . we need to give key, value pairs.
let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));//creates new array from given arguments.



