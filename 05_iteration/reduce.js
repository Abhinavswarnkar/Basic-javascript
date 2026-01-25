// reduce is an array method that reduces an array down to a single value (number, object, array, etc.).
// array.reduce((accumulator, currentValue, index, array) => {
//   return newAccumulator;
// }, initialValue);

// accumulator → the running result

// currentValue → current item in the array

// initialValue → starting value for the accumulator (important!)

const myNums=[1,2,3,4]

const newNums=myNums.reduce( (acc,currentValue)=>{
    console.log(`acc is ${acc} and current value is ${currentValue}`);
    return acc+currentValue},0)
console.log(newNums);
