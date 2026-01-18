// Immediately Invoked function expression (IIFE)

(function chai(){
    // this named iife. name is chai .
    console.log('DB connected')
} )();
// This is an iife . we enclose the function in () to get it immediately executed. 
//The function keeps on running since no end point or return is there . therefore we use ; to end the function.
// It is used to immediately invoke a function.
// to also prevent from the pollution of variables declared in global scope .

( (username)=>{ // simple iife
    console.log(`DB connected two with ${username}`)
}) ('hitesh');