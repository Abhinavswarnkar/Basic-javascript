function sayMyName(){
console.log("A");
console.log("B");
console.log("H");
console.log("I");
console.log("N");
console.log("A");
console.log("V");
}

// sayMyName();

function addTwoNo(number1,number2){
    let result=number1+number2
    return result;
}

const result =addTwoNo(3,4);
// console.log(result);

function userLogin(username){
    if(!username){
        // console.log("please enter username");
        return;
    }
    return `${username} successfully logged in`
}
let name= userLogin()
// console.log(name);

// *****************REST Operator*****************************

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400));
//... is the Rest operator which packs every argument in a bundle and returns it as an array.

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,500));
//Takes first two values as val1, val2 and return rest values in an array as REST operator is used.

// *********************Object in a function*****************************
const user={
    username:"Abhinav",
    price:299
} 

function handleObject(anyObject){
        return `${anyObject.username} is the username and ${anyObject.price} is the price`
 }

//  console.log(handleObject(user))
// we can also declare object properties while calling function .
// // console.log(handleObject({
//     username:"abhinav",
//     // price:299
// // })) 

// **********************Arrays in function**************

const myArray=[100,200,300]

function returnsSecondValue(getArray){
    return getArray[1]
}
// console.log(returnsSecondValue(myArray));
// we can also declare arguments during calling a function.
console.log(returnsSecondValue([100,300,200,400]));
