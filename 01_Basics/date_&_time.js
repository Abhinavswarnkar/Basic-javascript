const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());

const myCreatedDate = new Date(2023,0,14);
// console.log(myCreatedDate.toDateString());//This will give date as per given input.

const myTimeStamp = Date.now();//gives time in milliseconds from default date : Jan 1 1970
// console.log(myTimeStamp);
// console.log(Math.floor(myTimeStamp/1000));//Gives time in seconds, when divided by 1000.

const yourDate= new Date();
console.log(yourDate.getMonth());// month starts form 0
console.log(yourDate.getDay());// days starts from 1- monday
console.log(yourDate.getMonth() + 1);//month starts from 1.

// we can customize local string based on our requirements //

yourDate.toLocaleString('default',{
      weekday : "long"   // displays full name of weekdays 
 })
// ctrl+space is used to get suggestion from the system.  
