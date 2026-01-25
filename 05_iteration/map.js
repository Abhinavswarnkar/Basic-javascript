 const myNums=[1,2,3,4,5,6,7,8,9,10]

// let newNums=myNums.map( (nums)=>nums*10)
// console.log(newNums)

// map method return a new array by doing the operation.
// we can also chain the methods together .

let newNums=myNums
.map( (nums)=> nums*10)
.map( (nums)=>nums+1)
.filter( (nums=>(nums>41)))

console.log(newNums);
// this is called method chaining .
