const obj={
    "js":"javascript",
    "py":"python",
    "rb":"ruby"
}

for (const key in obj) {
 console.log(obj[key]);
    
}

    const myArr=[1,2,3,4,5,6]

    for (const key in myArr) {
           console.log(myArr[key]);
           
    }
    // For-in loop works for objects best. though we can use it for array also
    // Map is not iterable , so we cannot use for-in loop. 
    // for...in iterates over enumerable object properties, not iterable values
