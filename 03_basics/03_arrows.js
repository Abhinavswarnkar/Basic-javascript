const user= {
    username:'abhinav',
    price:299,
    welcomeMessage:function(){
        return `${this.username} welcome to website`
    }

}     
// console.log(user.welcomeMessage())
// user.username='sam';
// console.log(user.welcomeMessage())
// This points to the current context.

// function chai(){
//     let username='abhinav'
//     console.log( this)
// }
// chai();//we cannot use this in functions as we use it in objects .
//This only refers to the global objects here.

// let chai=function(){
//      let username='abhinav'
//     console.log(this.username)
// }
// chai()

// *********************Arrow Functions**************************************

// let chai= ()=>{
//  let username='abhinav'
//    console.log(this)
// }

// chai()
// this does not work with arrow functions. but it points towards the global object
// in normal fuctions. 

// const addTwoNo=(num1,num2)=>{return num1+num2}//if we use return ..then {} is necessary.
// This is explicit return.

// const addTwoNo=(num1,num2)=> num1+num2 // We can directly write like this .
// It is known as Implicit return .

const addTwoNo=(num1,num2)=>({
    username:'abhinav',
    price:'299'
})
// I we want to use an object inside arrow funcgtion then it is necessary to enclose them in ().
// Then only it will work.