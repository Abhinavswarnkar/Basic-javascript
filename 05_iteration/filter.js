

// const code=["js","py","ruby","java"]

// const newArr= code.forEach( (items)=>{
//   console.log(items);
//   return items
// })
// console.log(newArr);
// for each loop does not return an array .
// It does not return any value , we cannot act on any value

// Therefore filter was introduced.

const myNums=[1,2,3,4,5,6,7,8,9]
const arrNums=[]

// const newNums=myNums.filter( (nums)=>{
    // return nums>4
// })
// console.log(newNums);

// doing the same task using for each loop
myNums.forEach( (nums)=>{
    if (nums>4) {
     arrNums.push(nums)
    }
})
    console.log(arrNums)