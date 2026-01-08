const myArr= [1,2,3,4,5,6,7]; 
// console.log(myArr);

const myArr2 = new Array(7,5,4,3,2,1);
// console.log(myArr2);
// console.log(myArr2[2]);

// myArr.push(8);// pushes elements at last in array.
// console.log(myArr);
// myArr.pop();// pops the last element in array.
// console.log(myArr);

myArr2.unshift(9);//adds element at the starting of array.
//  console.log(myArr2);
myArr2.shift();//removes the starting element if array.
// console.log(myArr2);

// console.log(myArr.includes(9));//Gives the boolean value wheather the element exist in array or not. 
// console.log(myArr.indexOf(4));//Gives the index of element.
// console.log(myArr.indexOf(10));//If the element is not there in array, it will print index as -1.

//*********************SLICE & SPLICE******************************************

const nyArray = [1,2,3,4,5,6];
console.log('A',nyArray);
console.log(nyArray.slice(1,3));//slice the array into parts. 3rd element will not be included. 
console.log('B',nyArray);
console.log(nyArray.splice(1,3));//This also split the array into parts but in these 3rd element will also be included.
console.log(nyArray);

/* key differece between slice and splice is that after using slice the original array 
remains the same , it is not manipulated , but after using Splice the original array is
manipulated. The elements which are spliced gets remove from the original array.*/









