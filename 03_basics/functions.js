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
console.log(result);

function userLogin(username){
    if(!username){
        console.log("please enter username");
        return;
    }
    return `${username} successfully logged in`
}
let name= userLogin()
console.log(name);






