const num=100;
console.log(num);
const newNum= new Number(211.434);
// console.log(newNum);
// console.log(newNum.toString().length);//first it is converted to string then length can be checked
// console.log(newNum.toFixed(2));//it gives fixed valued upto two places .
// console.log(newNum.toPrecision(2));//this gives precised values till 2 places ,if decimal is there it will be rounded off.

const hundreds = 100000;
// console.log(hundreds.toLocaleString());//It will convert the no two local string like 100,000.
// //default will be as per US standard.
// console.log(hundreds.toLocaleString('en-IN'));//this will give as per Indian standard(1,00,000)

//*************************MATHS********************************** */

// console.log(Math.abs(-5))//gives the absoute value only
// console.log(Math.floor(3.12345))//gives the lowest value
// console.log(Math.random());//gives random values b/w 0 to 1.
// console.log(Math.random()*10);

const max=20;
const min=10;
console.log(Math.floor((Math.random()*(max-min+1)+min)));