console.log(addOne(5));

function addOne(num){// function declaration
   return num +1
}

//This gets executed even when function is called before declaration.
// Function declarations are fully hoisted

// During the memory creation phase, JavaScript stores the entire function definition

// So addOne is available before its actual line in the code


console.log(addTwo(5));
const addTwo=function (num){// this is function expression. 
    return num +2
}
//but this does not get executed as value is stored in a variable.
//It is referred to as hoisting.
// addTwo is a variable, not a function declaration
// const variables are hoisted but not initialized
// Until the assignment happens, addTwo is in the Temporal Dead Zone (TDZ)