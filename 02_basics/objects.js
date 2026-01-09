/*there are two ways to declare objects .
 1) By using Object Literals - One object can have multiple instances.
 2) By using constructor - Singleton Object is formed. Declared by Object.create .*/
const mySym = Symbol('key1');//A primitive datatype .
 const jsUser={
    name: "Abhinav",
    "full name": 'Abhinav Swarnkar',
    [mySym] :'key1',// symbol should always be inside square brackets.
    age: 25,
    location: 'Bilaspur',
    mail: 'abhinav.swarnkar@2021.com',
    isLoggedIn : false,
    loginDays : ['Monday' , 'Tuesday']
 }
//    console.log(jsUser.mail);//accessing using dot notation.
//    console.log(jsUser['mail']);//accessing using bracket notation.
//    console.log(jsUser['full name']);//If key is also in a string format , we cannot use dot notation .
//    //It gives error .
//    console.log(jsUser[mySym]);//this is how a symbol is accessed in an object .
//    console.log(typeof jsUser[mySym]);//since the value stored is a string therefore in typeof it shows string .
   // if we search typeof mySym then it will show as symbol.

   jsUser.mail='abhinav.swarnkar@wipro.com'//Changes the value of mail in the object.
  // Object.freeze(jsUser);//Freezes the given property of the object .;
 
  jsUser.greeting=function(){   //function declaration
    console.log('Hello World'); 
  }
   
   jsUser.greeting();//Function call in objects
   