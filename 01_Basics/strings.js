const gameName = new String ('Abhinav');//invoke string as an object//
// console.log(gameName);
// console.log(gameName.length);
// console.log(gameName[2]);
// console.log(gameName.charAt(4));//prints the character at 4th index//
// console.log(gameName.indexOf('i'));//prints the index no of i //

const myName = new String ('palak-gec-clg');
// console.log(myName);
// console.log(myName.substring(0,4));//prints the substring from 0 to 3 ,4th is not included//
// console.log(myName.slice(-9,3));//we can give -ve values at slice,it prints from reverse.
// the process is like if there is (-6 ,3) then it will be processed as {totallength - given values }
//like {9-6} therefore it will be (3,3)   

 const newOne = new String('   Palak  ');
// console.log(newOne);
// console.log(newOne.trim());//it trims the extra spaces.

// const url="https/abhinavswarnkar/github%20.com";
// console.log(url.replace('%20','-'));//It replaces the particular characters. we need to specify them.
// console.log(url.includes("abhinav"));//This gives boolean values wheather the given string is there or not in the url.
// console.log(url.includes('palak'));

console.log(myName.split('-'));//Split seperates the strings based on the seperator given then stores it in an array.


//this are some methods used with strings.