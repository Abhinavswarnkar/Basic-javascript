// Falsy Values
// false, 0 ,-0, BigInt 0n, "",null, undefined,NaN

// Truthy Values
// "0","false",[],{},function(){}," "

// let userEmail=[];
// if (userEmail.length==0) {
//     console.log("Array is empty");
    
// } //To check if array is empty we can pass on a message. 

// let newObj={};
// if(Object.keys(newObj).length==0){
//     console.log("object is empty");    
// }// To check if Object is empty , then pass on a message. 
// First the Object.keys() is used which converts the object key values pair to array.
// then we can use the length property to check like array. 


// ***********Nullish Coealescing operator*******************
// It returns the right-hand value only if the left-hand value is null or undefined.
// When ?? triggers

// Only when the left side is:

// null

// undefined
// Not when it’s:

// 0

// "" (empty string)

// false

// NaN

val1=10??15;
console.log(val1);

val1=null??20;
console.log(val1);

// *****************************ternary operator**************
// The ternary operator in JavaScript is a short-hand for if...else.
// condition ? valueIfTrue : valueIfFalse


const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Yes


