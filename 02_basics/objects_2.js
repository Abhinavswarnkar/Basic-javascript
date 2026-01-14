const tinderUser=new Object()
// console.log(tinderUser);//singleton object using constructor

const jsUser= {};
// console.log(jsUser);//non singleton using object literals.

jsUser.email="some@gmail.com"
jsUser.name="sammy"
jsUser.isLoggedIn=false;

// console.log(jsUser);

tinderUser.mail='anyone@gmail.com'
tinderUser.rollno='123ers'
tinderUser.name={
    fullName:{
        firstName:'Abhinav',
        lastName:'Swarnkar'    }
    };
    //  console.log(tinderUser.name.fullName.firstName);//we can access like this.

     const obj1={1: 'a',2: 'b'}
     const obj2={3: 'c',4:'d'}

    //  const obj3=Object.assign({},obj1,obj2);//Assign method is used to merge two objects.
     //first parameter is used as target and 2nd or rest others are source.
     //here I left an empty object as target. A good practice .
    //  console.log(obj3);

const obj3={...obj1,...obj2};
// console.log(obj3);// Spread operator.

// *****************Array Of Objects *********************

const user=[
    {
        name:'Abhinav',
        rollno:23
    },
    {
        name:'Ayush',
        rollno:24
    },
    {

    },
    {

    }
];

// console.log(user[1].name);//square brackets to access array then dot operator to access object property.
// console.log(user[0].rollno);

// console.log(jsUser);
// console.log(Object.keys(jsUser));//prints all the keys in an object.
// console.log(Object.values(jsUser));//prints all the values in an object.
// console.log(Object.entries(jsUser));//prints all the key-value pairs(properties) of object.

// console.log(jsUser.hasOwnProperty('isLoggedIn'));//Works as "include" method.
//gives the boolean value if the property exist or not in the object.

// *******************Destructuring Objects*************************

const course={
    name:"JS in hindi",
    price:299,
    courseInstructor:"Hitesh"
}

const {courseInstructor}=course;
console.log(courseInstructor);

const {courseInstructor:Instructor}=course;
console.log(Instructor);
//Both syntax works.

// We also read about APIs which are JSON files. Its like a nameless objects and arrays.(format of file)
 // {
//  "name": "JS in hindi",
//  "price": "free",
//   "teacher":"hitesh"      
// this is the format of the JSON file .
// };
// [
//     {},{}
// ]
// we can use JSON file formatter to arrange a JSON file and understand it.






     



